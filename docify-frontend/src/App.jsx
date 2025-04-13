import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Foreround from './Components/Foreround';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'intro.js/introjs.css';

function App() {
  
  return (
    <Router>
      <Navbar />
      
      <div className=" relative w-full h-screen">
        <Foreround />
        <Background />
      </div>
      <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/> 

      
      </Routes>
      
    </Router>
  );
}

export default App;
