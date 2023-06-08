import React, { useState } from 'react';
import CalenderDay from "./CalenderDay";


const CalenderWeek : React.FC = () => {
    return (
        <div>
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

export default CalenderWeek