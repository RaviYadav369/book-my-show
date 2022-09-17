import './App.css';
import React from 'react';
import axios from 'axios';

import { Route, Routes } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Homepage from './pages/Home-page';
import Moviepage from './pages/Movie-page';
import Playpage from './pages/Play-page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_PROJECT_API_KEY
axios.defaults.params["api_key"] ="3e755e161f60212ec644df1c1bedf4c1";



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
