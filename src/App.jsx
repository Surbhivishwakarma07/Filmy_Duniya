import React from 'react';
import {BrowserRouter, Route, Routes, Navigate}from 'react-router-dom';
import Home from "./Home";
import Movies from './Movies';
import Navigation from './Navigation';
import Myspace from './Myspace';
import Sports from './Sports';
import TV from './TV';
const App=()=>
(
    <React.Fragment>
   <BrowserRouter>
                <Navigation/>
                <Routes>
                <Route path='/'  element={<Movies/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/myspace" element={<Myspace/>}/>
            <Route path="/sports" element={<Sports/>}/>
            <Route path="/tv" element={<TV/>}/>
            <Route path="/*" element={<Navigate to ="/"/>}/>
           
 
  </Routes>

  </BrowserRouter>       
    </React.Fragment>
);


export default App;
