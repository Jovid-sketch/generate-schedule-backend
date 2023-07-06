import xlsx from 'xlsx';

export function readExcel(file: Express.Multer.File):{ [key: string]: string }[]{
    const filePath = file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = `${workbook.SheetNames[0]}`;
    const sheet: xlsx.WorkSheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
}