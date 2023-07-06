import { Schedule, TSchedule } from "../data/schedule";
import { calcFreeSpace } from "./calc-free-space";

const intersection = (arrA: any[], arrB: any[]) =>
  arrA.filter((x) => arrB.includes(x));

export const findAllIntersections = (
  schedules: TSchedule[string][],
  dateFrom: Date,
  dateTo: Date,
  intersected?: { day: string, times: string[] }[]
) => {
  const schedule = schedules.shift();

  if (schedule === undefined) {
    return intersected;
  }

  const freeGroupSpaces: { day: string, times: string[] }[] = calcFreeSpace(schedule, dateFrom, dateTo);

  const intersect = intersected
    ? freeGroupSpaces.map((s, i) => {
      return {
        day: s.day as string,
        times: intersection(s.times, intersected[i].times)
      };
    })
    : freeGroupSpaces;

  return findAllIntersections(schedules, dateFrom, dateTo, intersect as { day: string; times: string[]; }[])
};
