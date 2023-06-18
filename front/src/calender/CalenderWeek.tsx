import React, { useState } from 'react';
import CalenderDay from "./CalenderDay";
import './CalenderWeek.css';


interface WeekProps {
    week: number;
}

const CalenderWeek : React.FC<WeekProps> = ({week}) => {
    return (
        <div className={'calenderWeek'}>
            {
                [1, 2, 3, 4, 5, 6, 7].map((day) => {
                    return (
                        <CalenderDay num={day} />
                    )
                })
            }
        </div>
    )
}

export default CalenderWeek;