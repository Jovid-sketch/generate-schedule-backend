import express, { Express } from 'express'
import multer from 'multer';
import path from "path";
import moment from 'moment';
import xlsx from 'xlsx';

import { findAllIntersections } from './lib/find-all-intersections'
import { Schedule, TeacherSchedule, TSchedule } from "./data/schedule";
import { readExcel } from './lib/read-excel';
import { unlinkSync } from 'fs';

const app: Express = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const PORT = 5001
moment().format();

app.locals.formattedStartDate as string
app.locals.formattedEndDate as string
app.locals.pathToFileGroups as string
app.locals.pathToFileResponse = './uploads/updated_result.xlsx';

let listOfTeachers: string[] = []
let listOfGroups: string[] = []

// Настройка multer для обработки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Папка, куда сохранять загруженные файлы
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Имя файла сохраняется без изменений
    },
});
const upload = multer({ storage });

app.post('/generate', upload.fields([
    { name: 'groups', maxCount: 1 },
    { name: 'teachers', maxCount: 1 }
]), (req, res) => {

    //console.log(req.files)
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Request body cannot be empty.' });
    }
    const startDate = req.body.dateStart;
    const endDate = req.body.dateEnd;
    // Проверка наличия дат начала и конца
    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'Start date and end date are required.' });
    }
    if (!req.files) {
        res.status(400).send('No files were uploaded.');
        return;
    }
    app.locals.formattedStartDate = req.body.dateStart;
    app.locals.formattedEndDate = req.body.dateEnd;
    const fileGoups = req.files['groups'][0];
    const fileTeachers = req.files['teachers'][0];
    handleUpload(fileTeachers, 'teachers').then(()=>
    {
        unlinkSync(fileTeachers.path);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err);
    });
    handleUpload(fileGoups, 'students').then(() => {
        app.locals.pathToFile = fileGoups.path
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err);
    });
    // Обработка файлов и других данных формы

    try {
        //test

        if (app.locals.formattedStartDate === null || app.locals.formattedEndDate === null)
            return res.status(400).send('no time set');
        if (!((listOfTeachers.length == 2) && listOfTeachers.every((element) => element !== null)))
            return res.status(400).send('no teacher set');
        if (!(listOfGroups.length > 0 && listOfGroups.every((element) => element !== null)))
            return res.status(400).send('no group set');
        if (!app.locals.pathToFile)
            return res.status(500);

        const listOfFirstRetakes: string[] = []
        const listOfTimeInterval: string[] = []

        for (const group of listOfGroups) {
            console.log("Группа: ", group);
            const times = findAllIntersections(
                [
                    Schedule[group.toString()],
                    TeacherSchedule[listOfTeachers[0]],
                    TeacherSchedule[listOfTeachers[1]]
                ],
                new Date(app.locals.formattedStartDate),
                new Date(app.locals.formattedEndDate)
            );

            const filteredTimes = times.filter((time: { day: string, times: string[] }) => {
                return (time.day >= startDate && time.day <= endDate)
            })
            //console.log(filteredTimes)
            if (filteredTimes[0].day != undefined) listOfFirstRetakes.push(moment(filteredTimes[0].day, 'YYYY-MM-DD').format('DD.MM.YYYY'));
            if (filteredTimes[0].times[0] != undefined) listOfTimeInterval.push(filteredTimes[0].times[0])
        }
        const listOfRooms: string[] = []
        for (let i = 0; i < listOfTimeInterval.length; i++) {
            listOfRooms.push('https://discord.gg/aXbEmJTT');
        }
        addToExcelFile(app.locals.pathToFile, [0, 2, 5], [listOfFirstRetakes, listOfTimeInterval, listOfRooms]);
        unlinkSync(fileGoups.path);
        const absolutePath = path.resolve(app.locals.pathToFileResponse as string);

        res.sendFile(absolutePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.sendStatus(500);
            } else {
                unlinkSync(absolutePath)
                console.log('File sent successfully');
            }
        });

        //res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.get('/', (req, res) => {
    res.send('Привет, мир!');
  });
  

async function handleUpload(file: Express.Multer.File | undefined, fileType: string): Promise<void> {
    if (!file || file.size === 0) {
        console.log("handleUpload error: file is empty");
        return;
    }
    const dataFromExcel = readExcel(file);

    if (fileType === 'students') {
        listOfGroups = [];
        for (const obj of dataFromExcel) {
            for (let [key, value] of Object.entries(obj)) {
                key = key.replace(/(\r\n|\n|\r)/gm, '')
                if (key === 'Группа') {
                    //console.log(value)
                    listOfGroups.push(value.toString());
                }
            }
        }
        console.log(listOfGroups)
    }
    if (fileType === 'teachers') {
        listOfTeachers = [];
        for (const obj of dataFromExcel) {
            for (let [key, value] of Object.entries(obj)) {
                if (key !== undefined || value !== undefined) {
                    listOfTeachers.push(key.toString());
                    listOfTeachers.push(value.toString())
                    console.log(listOfTeachers)
                    break;
                }
            }
        }
    }
    if (fileType === 'audience') {
        console.log('Empty file');
    }
}

app.listen(PORT, () => console.log('port ' + PORT))

function addToExcelFile(filePath: any, numberHeaders: number[], dataToAdd: string[][]) {
    if (!filePath || !numberHeaders || !dataToAdd) {
        console.log('Problem with data in addToExcelFile')
        return;
    }
    if (numberHeaders.length !== dataToAdd.length) {
        console.log('Problem with data length in addToExcelFile')
        return;
    }
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData: object[] = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    const headerRow: any = jsonData[0];

    numberHeaders.forEach((numberHeader, i) => {
        const startCell = xlsx.utils.encode_cell({ r: 1, c: numberHeader });
        const dataToAddJSON = dataToAdd[i].map((prop) => ({ nameHeader: prop }));
        xlsx.utils.sheet_add_json(worksheet, dataToAddJSON, { origin: startCell, skipHeader: true });
    });

    xlsx.writeFile(workbook, app.locals.pathToFileResponse);
}
