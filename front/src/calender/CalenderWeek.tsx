import React, { useState } from 'react';
import CalenderDay from "./CalenderDay";
import './css/CalenderWeek.css';


interface WeekProps {
  week: Array<number>;
}

const CalenderWeek : React.FC<WeekProps> = ({week}) => {
  return (
    <div className={'calenderWeek'}>
      {
        week.map((day) => {
          return (
            <CalenderDay num={day} />
          )
        })
      }
    </div>
  )
}

export default CalenderWeek;