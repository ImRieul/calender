import React, { useState } from 'react';
import CalenderMonth from "./calender/CalenderMonth";
import Calender from './calender/Calender';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path="/calender/:paramYear/:paramMonth" element={<Calender />} />
    </Routes>
  );
}

export default App;

