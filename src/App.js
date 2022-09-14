import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Home-page';
import Moviepage from './pages/Movie-page';
import Playpage from './pages/Play-page';


function App() {

   return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/movie/:id' element={<Moviepage />} />
      <Route path='/playpage' element={<Playpage />} />
    </Routes>
  );
}

export default App;
