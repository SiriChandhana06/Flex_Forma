import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Result from './Components/Result';
import Gainsgalaxy from './Components/Gainsgalaxy';
import Slimsavvy from './Components/Slimsavvy';
import Fitfusion from './Components/Fitfusion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gainsgalaxy' element={<Gainsgalaxy/>}/>
        <Route path='/slimsavvy' element={<Slimsavvy/>}/>
        <Route path='/fitfusion' element={<Fitfusion/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
