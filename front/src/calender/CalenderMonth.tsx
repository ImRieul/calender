import React, { useState } from 'react';
import CalenderWeek from "./CalenderWeek";

interface CalendarProps {
    year: number;
    month: number;
}

const CalenderMonth: React.FC<CalendarProps> = ({ year, month }) => {

    return (
        <div className={'calenderMonth'}>
            {
                [1, 2, 3, 4].map((week) => {
                    return (
                        <CalenderWeek week={week} />
                    )
                })
            }
        </div>
    )
};

export default CalenderMonth;


