import React, { useState } from 'react';
import './CalenderDay.css';


interface DayProps {
    num: number;
}

const CalenderDay: React.FC<DayProps> = ({num}) => {

  return (
    <div className={'calenderDay'}>
        <div className={'dayNum'}>
            {num}
        </div>
        <div>
        </div>
    </div>
  )
}



export default CalenderDay;