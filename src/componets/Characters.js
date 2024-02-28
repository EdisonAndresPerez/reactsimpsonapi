import '../App'
import React from 'react';


export default function Characters (props) {
    const{characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }




    return(
        <div className='characters'>
            <h1>Estos son los personajes</h1>
            <button className='btn' onClick={resetCharacters}>
                <span className='back'>Volver</span>
            </button>
            <div className='characters-container'>
                    {  characters.map((characters, index) => (
                    <div className='character-details ' key={index}>
                        <h3>{characters.character}</h3>
                        <img src={characters.image} alt={characters.character} />
                        <p>{characters.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

