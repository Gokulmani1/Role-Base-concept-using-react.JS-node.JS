import React from "react";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {Signin} from './component/Signin';
import {Signup} from './component/Signup';
import{Student} from './component/Student';
import{Staff} from './component/Staff';
import{Admin} from './component/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Student" element={<Student/>}></Route>
        <Route path="/Staff" element={<Staff/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
