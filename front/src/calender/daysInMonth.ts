export interface Day {
  day: number;        // 일
  dayOfWeek: number;    // 요일
  week: number;       // 주
}

export const getLastDay = (year: number, month: number): number => new Date(year, month, 0).getDate();

export const getDays = (year: number, month: number): Array<Day> => {
  const lastDay = getLastDay(year, month);

  return Array(lastDay).fill(0).map((_, index) => {
    let day = index + 1;
    let dayOfWeek = new Date(year, month - 1, index + 1).getDay();
    let week = Math.ceil((day + new Date(year, month - 1, 1).getDay()) / 7);

    return {
      day: day,
      dayOfWeek: dayOfWeek,
      week: week
    };
  });
}

export const getDaysInWeek = (year: number, month: number, week: number): Array<Day> => {
  return getDays(year, month).filter(day => day.week === week);
}

export const getWeekCount = (year: number, month: number): number => {
  const days = getDays(year, month);
  const lastDay = days[days.length - 1];

  return lastDay.week;
}