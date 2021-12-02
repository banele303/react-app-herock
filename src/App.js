import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import Home from './components/pages/Home';

import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/Services'  element={<Services/>}/>
     
       <Route exact path='/ContactUs'  element={<ContactUs/>}/>
   
    
      </Routes>
    </Router>
     
   </>
  );
}

export default App;
