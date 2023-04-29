import React, { useState } from 'react'
import NavBar from './../NavBar';
import Film from './../Film';

function Home(props) {


  const [title, setTitle] = useState('');
  
  const handleChange = (e) =>{
    setTitle(e.target.value)
  }
  
  
  return (
    <div classNameName="App">
      <div className="container">
        <h2 className="text-white">SANE FLIX</h2>
      </div>
      <NavBar/>
      <div className="d-flex justify-content-end mr-2 mt-3 mb-3">   
        <input type="text"  className="form-control-lg" placeholder="search" onChange={handleChange}/>
      </div>
     
      <main className="container py-2" >
        <div className="row miabox-card">
          {props.film.filter((film) => film.title.toLowerCase().includes(title.toLocaleLowerCase()) ).map(film => (
              <Film films={film}/>
          ))}
           
        </div>
      </main>
    </div>
  )
}

export default Home