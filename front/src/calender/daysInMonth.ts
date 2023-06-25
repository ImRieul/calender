const getLastDay = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
}

const getStartDay = (year: number, month: number): number => {
  const date = new Date(year, month - 1, 1);
  return date.getDay();
}

export const getDays = (year: number, month: number): Array<number> => {
  const startDay = getStartDay(year, month);
  const lastDay = getLastDay(year, month);

  return [];
}


// TODO Typescript Test uri을 만들기.