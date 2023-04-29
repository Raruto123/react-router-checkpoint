import React from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './../NavBar';

function FilmDetails(props) {

  let id = useParams().id;

  let film = props.films.find(f => f.id == id);


  // let videoLink = 
  return (
    <div>
      <h1 className='text-white'>Film details</h1>
      <NavBar/>

      <div>
      <iframe 
        width="955" 
        height="538" 
        src={film.videoLink}
        title={film.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
       </iframe>
      </div>
    </div>
  )
}

export default FilmDetails