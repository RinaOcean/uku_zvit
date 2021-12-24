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
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import IntroCampaignResPage from './pages/IntroCampaignResPage/IntroCampaignResPage';
import StructureChangesPage from './pages/StructureChangesPage/StructureChangesPage';
import StudentsWinsPage from './pages/StudentWinsPage/StudentsWinsPage';
import ProfessorsWinsPage from './pages/ProfessorsWinsPage/ProfessorsWinsPage';


const  App = () => (
  <div className='App'>
  
    <Routes >
      <Route path="/" element={<MainPage/>}/>
      <Route path="/strategy-goals" element={<StrategyPage/>}/>
      <Route path="/introductory-campaign-results" element={<IntroCampaignResPage/>}/>
      <Route path="/structure-changes" element={<StructureChangesPage/>}/>
      <Route path="/students-wins" element={<StudentsWinsPage/>}/>
      <Route path="/professors-wins" element={<ProfessorsWinsPage/>}/>
    </Routes>
    <ScrollUpBtn/>
    <Footer/>
    </div>
);    
 

export default App;
