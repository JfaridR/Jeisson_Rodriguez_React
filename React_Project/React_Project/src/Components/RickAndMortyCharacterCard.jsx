
import React from 'react'
import CharacterCard from './components/CharacterCard'
import { useState, useEffect } from 'react'

function RickAndMortyCharacterCard(props) {

    const rickAndMortyCharacterId = props.id;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
  
    useEffect( () => {
      // Este useEffect se ejecutará una única vez cuando el componente se monte
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
        .then((response) => response.json())
        .then((result) => {
          setName(result.name)
          setImage(result.image)
          setGenre(result.gender)
          setStatus(result.status)
        })
    }, [])     
  
    return (
      <div>
        <CharacterCard 
          name={name}
          image={image}
          genre={genre}
          status={status}
        />
      </div>
    );
  }
  
  export default RickAndMortyCharacterCard;