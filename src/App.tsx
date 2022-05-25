import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Destination from './page/Destination/Destination';
import Crew from './page/Crew/Crew';
import Technology from './page/Technology/Technology';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
