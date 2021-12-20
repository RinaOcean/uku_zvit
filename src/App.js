import React from 'react';
import {Switch, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Introduction from './components/Introduction'
import Chapters from './components/Chapters';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer';
import './App.css';
import MainPage from './pages/MainPage';
import StrategyPage from './pages/StrategyPage/StrategyPage';


const  App = () => (
  <div className='App'>
  
    <Routes >
            <Route path="/" element={<MainPage/>}/>
            <Route path="/strategichni-cili" element={<StrategyPage/>}/>
     {/* <Header/>
     <Introduction/>
     <Chapters/>
     <Partners/>
     <Footer/> */}
    </Routes>
    </div>
);    
 

export default App;
