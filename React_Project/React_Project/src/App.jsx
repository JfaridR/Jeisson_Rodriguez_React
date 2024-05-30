import './App.css'
import React from 'react'
//import Title from './Components/Title';
//import Image from './Components/Image';
//import Details from './Components/Details';
//import Rick from '../src/assets/Rick.jpeg';
//import Doraemon from '../src/assets/Doraemon.jpeg';
//import Goku from '../src/assets/Goku.jpeg';
import CharacterCard from './Components/CharacterCard'
import { useState, useEffect } from 'react'

/*
//Tarea #2
function App() {
  return (
    <div className='container'>
      <div className='title'>Avatar by James Cameron</div>
      <div className='logo'></div>
      <div className='text'>
        Avatar es una pelìcula dirigida por James Cameron y que fue estrenada en el 
        año 2009 luego de más de 10 años de producción. Avatar es una película de 
        ficción que muestra la vida en otro planeta donde habitan seres muy parecidos 
        a los humanos y que verán afectada su paz y armonía debido a la presencia de 
        los humanos provenientes de la tierra. La película utiliza un concepto muy 
        llamativo el cual permite clonar la mente de una persona y poder trasladarlos
        a un cuerpo totalmente diferente, tecnología usada principalmente para guerra
        y que permitirá una mejor interacción con estos habitantes del planeta Navy.
      </div>
    </div>
  );
}
*/

/*

//Tarea #3.1

function App() {
  return (
    <div className='cardContainer'>
      <Image url={Rick}/>
      <Title title='Rick Martin'/>
      <Details genre= "Human" status= "Alive"/>
    </div>
  );
}
*/

//Tarea #3.2

/*
function App(){
  return (
    <>
      <div className='mainContainer'>
        <CharacterCard
          image = {Rick}
          title = 'Rick Martin'
          genre = 'Human'
          status = 'Alive'
        />
        <CharacterCard
          image = {Goku}
          title = 'Gokú'
          genre = 'Human'
          status = 'Alive'
        />
        <CharacterCard
          image = {Doraemon}
          title = 'Doraemon'
          genre = 'Animal'
          status = 'Alive'
        />
      </div>
    </>
  )
}
*/


const rickAndMortyCharacterId = 10;

function App (){


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
    <div className='mainCont'>
      <h1 className='mainTitle'>Personajes de Rick and Morty</h1>
      <CharacterCard 
        name={name}
        image={image}
        genre={genre}
        status={status}
      />
    </div>
  )




}

export default App;
