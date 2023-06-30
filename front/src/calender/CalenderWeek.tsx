import React, { useState } from 'react';
import CalenderDay from "./CalenderDay";
import './css/CalenderWeek.css';
import { Day } from './daysInMonth';

// interface WeekProps {
//   week: Array<number>;
// }
//
// const CalenderWeek : React.FC<WeekProps> = ({week}) => {
//   return (
//     <div className={'calenderWeek'}>
//       {
//         week.map((day) => {
//           return (
//             <CalenderDay num={day} />
//           )
//         })
//       }
//     </div>
//   )
// }
//
// export default CalenderWeek;

interface WeekProps {
  week: Array<Day>;
}

const CalenderWeek: React.FC<WeekProps> = ({ week }) => {
  return (
    <div className={'calenderWeek'}>
      {week.map((day) => {
        return <CalenderDay key={day.day} num={day.day} />;
      })}
    </div>
  );
};

export default CalenderWeek;