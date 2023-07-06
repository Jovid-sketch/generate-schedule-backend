import { TSchedule } from "../data/schedule";

const TIMES = new Set([
  "9:00 - 10:30",
  "10:40 - 12:10",
  "12:20 - 13:50",
  "14:30 - 16:00",
  "16:10 - 17:40",
  "17:50 - 19:20",
  "19:30 - 21:00"
]);

const DAYS: (keyof TSchedule["221-371"])[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const DATE_WORDS = {
  Янв: "January",
  Фев: "February",
  Мар: "March",
  Апр: "April",
  Май: "May",
  Июн: "June",
  Июл: "July"
} as Record<string, string>;


const getDates = (dateInterval: string) => {
  const [dirtyDateFrom, dirtyDateTo] = dateInterval.split(" - ");
  const [dirtyDateFromDate, dirtyDateFromMonth] = dirtyDateFrom.split(" ");
  const parsedDateFrom = new Date(
    `${DATE_WORDS[dirtyDateFromMonth]} ${dirtyDateFromDate}, 2023`
  );

  if (dirtyDateTo) {
    const [dirtyDateToDate, dirtyDateToMonth] = dirtyDateTo.split(" ");
    const parsedDateTo = dirtyDateToMonth
      ? new Date(`${DATE_WORDS[dirtyDateToMonth]} ${dirtyDateToDate}, 2023`)
      : undefined;
    return [parsedDateFrom, parsedDateTo];
  }

  return [parsedDateFrom];
};

export const calcFreeSpace = (
  schedule: TSchedule[string],
  dateFrom: Date,
  dateTo: Date
) => {
  let tempDays = [...DAYS];
  let currentDay = tempDays.shift() as keyof TSchedule["221-371"];
  let currentSchedule = schedule[currentDay];
  let timesLeft = new Set(TIMES);
  const result = [] as { day: string; times: string[] }[];

  //смещение до текущего дня недели
  const dayWeek = (dateFrom.getDay() === 1) ? 0 : dateFrom.getDay() - 1;
  const currentDate: Date = new Date(dateFrom);
  currentDate.setDate(currentDate.getDate() - dayWeek);

  while (currentDay !== undefined) {
    timesLeft = new Set(TIMES);

    for (let i = 0; i < currentSchedule.lessons.length; i++) {
      const currentLesson = currentSchedule.lessons[i];

      const [lessonDateFrom, lessonDateTo] = getDates(
        currentLesson.dateInterval
      );
      
      // Логика для проверки интервала дат
      if (
        (lessonDateFrom?.getTime() ?? 0) > dateTo.getTime() ||
        (lessonDateTo?.getTime() ?? 0) < dateFrom.getTime()
      ) continue;

      if (TIMES.has(currentLesson.timeInterval))
        timesLeft.delete(currentLesson.timeInterval);
    }

    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    
    // Преобразование формата 'DD/MM/YYYY' в 'YYYY-MM-DD'
    const parts = formattedDate.split('/');
    const formattedDateFinal = `${parts[2]}-${parts[1]}-${parts[0]}`;
    result.push({ day: formattedDateFinal, times: Array.from(timesLeft) });

    currentDate.setDate(currentDate.getDate() + 1);
    currentDay = tempDays.shift() as keyof TSchedule["221-371"];
    currentSchedule = schedule[currentDay];
  }

  return result;
};
