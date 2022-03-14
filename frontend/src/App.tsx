import React from 'react';
import Home from './Pages/Home';
import Layout from './component/Layout/Layout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Routes, Route } from "react-router-dom";

import './App.css';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/welcome' element={<Layout childLogin={<Login/>} childSignup={<SignUp/>}></Layout>}/>
      </Routes>
   
  );
}

export default App;
