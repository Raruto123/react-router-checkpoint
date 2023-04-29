
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import FilmDetails from './components/pages/FilmDetails';
import { useState } from 'react';

function App() {

  const [films, setFilms] = useState(
  
      [
    {id : 1, title : "African Dance", image : "images/1.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 2, title : "Hell's Chicken", image : "images/2.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" }, 
    {id : 3, title : "Mind's", image : "images/3.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/NN5kLqu1xWI" },
    {id : 4, title : "Un homme pour deux soeurs", image : "images/4.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/L51xHrDszdk" },
    {id : 5, title : "We've all been there", image : "images/5.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 6, title : "Blood Cries", image : "images/6.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 7, title : "Taxi jet", image : "images/7.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 8, title : "Deux hommes deux femmes", image : "images/8.png", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    
  ])
  return (
      <Routes>
        <Route path='/' element ={<Home film = {films}/>} />
        <Route path='detail/:id' element ={<FilmDetails films = {films}/>} />
      </Routes>
  );
}

export default App;
