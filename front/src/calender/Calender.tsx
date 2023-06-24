import CalenderMonth from "./CalenderMonth";
import {useParams} from "react-router";
import React from "react";


const Calender: React.FC = () => {
  const { paramYear, paramMonth } = useParams<{paramYear : string, paramMonth: string }>();

  const year = parseInt(paramYear || '2021');
  const month = parseInt(paramMonth || '5');

  return (
    <div>
      <CalenderMonth year={year} month={month} />
    </div>
  )
}

export default Calender;