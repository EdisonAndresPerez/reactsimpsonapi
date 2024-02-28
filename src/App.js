
import './App.css';
import simpsonsImg from './img/los-simpsons_3343x2400_xtrafondos.com.jpg'
import { useState } from 'react';
import  Characters from './componets/Characters'

function App() {
  const[characters, setCharacters] = useState(null);
  
  const getCharacters = async () => { //Hacemos la funcionalidad del onclick.
    const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50');   //llamamos la api 
    const jsonCharacters = await apiCharacters.json(); //almaceno los datos guardados de la api ( "jsonAlmacenar" convertir la respuesta de la API a formato JSON)

    setCharacters(jsonCharacters);
  }


  return (
    <div className="App">
      <header className='app-header'>
        <h1 className='title'>Los Simpsons</h1>
        <p className='texto'>¡Bienvenidos a la página de Los Simpsons! Aquí les mostraremos todos los personajes con algo tan simple como:</p>
        {characters ? <Characters characters={characters} setCharacters={setCharacters}/> 
        : (
          <>
          <button className='btn' onClick={getCharacters}>precionar este boton</button>
          <img  src={simpsonsImg}  alt='Los simpsons'  className='img-home'></img>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
