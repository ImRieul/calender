import React, { useState } from 'react';
import './css/CalenderDay.css';


interface DayProps {
    num: number;
}

const CalenderDay: React.FC<DayProps> = ({num}) => {

  return (
    <div className={'calenderDay'}>
      <div className={'dayNum'}>
        {num || ''}
      </div>
      <div>
      </div>
    </div>
  )
}



export default CalenderDay;