import React from 'react';
import CalenderWeek from "./CalenderWeek";

interface CalendarMonthProps {
  year: number;
  month: number;
}

const CalenderMonth: React.FC<CalendarMonthProps> = (year, month) => {

  return (
    <div className={'calenderMonth'}>
    </div>
  )
};

export default CalenderMonth;