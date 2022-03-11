import React from 'react';
import Layout from './component/Layout/Layout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import './App.css';

function App() {
  return (
    <Layout childLogin={<Login/>} childSignup={<SignUp/>}/> 
  );
}

export default App;
