import React from 'react';
import CalenderWeek from "./CalenderWeek";

interface CalendarMonthProps {
  year: number;
  month: number;
}

const CalenderMonth: React.FC<CalendarMonthProps> = (year, month) => {

  return (
    <div className={'calenderMonth'}>
      {<CalenderWeek week={[1, 2, 3, 4, 5, 6, 7]} />}
      {<CalenderWeek week={[1, 2, 3, 4, 5, 6, 7]} />}
      {<CalenderWeek week={[1, 2, 3, 4, 5, 6, 7]} />}
      {<CalenderWeek week={[1, 2, 3, 4, 5, 6, 7]} />}
    </div>
  )
};

export default CalenderMonth;
