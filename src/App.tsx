import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Destination from './page/Destination/Destination';

function App() {
  
  return (
    <div className="App">
      SPACZE TOURISM incoming
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/about-us' element={<Home />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
