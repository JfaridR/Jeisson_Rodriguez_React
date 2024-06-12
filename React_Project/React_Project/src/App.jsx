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
//import RickAndMortyCharacterCard from './Components/RickAndMortyCharacterCard';

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

//Tarea 4.1 - Consulta tarjeta API y Hooks solo 1 a la vez

/*
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
*/

//Tarea 4.2 - Uso de tarjeta N veces

/*

function App () {
  return (
    <div className='mainCont'>
      <h1 className='mainTitle'>Personajes de Rick and Morty</h1>
      <div className='mainContainer'>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={12}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={9}/>
      </div>
    </div>
  )
}

*/

function App (){
  const [charactersList, setCharactersList] = useState([]);
  const [page, setPage] = useState(1)
  const [nameFilter, setNameFilter] = useState('')
  const [genreFilter, setGenreFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [error, setError] = useState()
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      setCharactersList(data.results)})
  }, [page])

  useEffect(() => {
      setTimeout(() => {
        setError()
      }, 5000)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
   setNameFilter(e.target.value)
   setGenreFilter(e.target.value)
   setStatusFilter(e.target.value)

  if(nameFilter === '' && genreFilter === '' && statusFilter === '') setError('!Please, you must enter at least one field¡')
 
  const filterParameters = new URLSearchParams({
   name: nameFilter,
   gender: genreFilter,
   status: statusFilter,

  });
  
  console.log(nameFilter)
  console.log(genreFilter)

    fetch("https://rickandmortyapi.com/api/character/?" + filterParameters)
    .then((response) => response.json())
    .then((data) => {

      console.log(data); 
      setCharactersList(data.results)
      console.log(data.info.pages)
      if (data.info.pages >= 2){
        var hide2 = document.getElementById('buttons2');
        hide2.style.visibility = 'visible';
      }
    })

    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('status').value = '';
    var hide = document.getElementById('buttons');
    hide.style.display = 'none';

  }

  useEffect(() => {
    const url = new URL(window.location)
    const parameters = new URLSearchParams(url.search)
    const getPage = parameters.get('page')
    if(getPage) setPage(parseInt(getPage))
    if(getPage === 'NaN') setPage(parseInt(getPage))

  }, [])

  const addQueryParameters = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(page) + 1)
    window.history.replaceState({}, '', url)
    console.log(page)
    setPage(parseInt(page) + 1)
    }

  const addQueryParameters2 = () => {
      const url = new URL(window.location)
      url.searchParams.set('page', page - 1)
      window.history.replaceState({}, '', url)
      setPage(page - 1)
  }

  const addQueryParameters3 = (pageIn) => {
    const url = new URL(window.location)
    url.searchParams.set('page', pageIn)
    window.history.replaceState({}, '', url)
    setPage(pageIn)
}

  return (
    <>
    <div className='mainCont'>
      <div className='mainTitle'></div>
      <form>
        <div className='formulario'>
          <input className='form' id='name' type="text" placeholder='Search character name'  onChange={(e) => setNameFilter(e.target.value)}/>
          <input className='form' id='status' type="text" placeholder='Search character status'  onChange={(e) => setStatusFilter(e.target.value)}/>
          <select className='form' id='gender' onChange={(e) => setGenreFilter(e.target.value)}>
            <option value="DEFAULT" disabled hidden selected >Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
          <button className='search' onClick={handleSubmit} type='submit'>Search</button>
        </div>
      </form>
      {error && (
        <h2 className='errorClass'>{error}</h2>
      )}
      <div className='mainContainer'>
      {charactersList.length !== 0 && charactersList.map((character) => (
        <CharacterCard 
        key={character.id} 
        name={character.name}
        image={character.image} 
        genre={character.gender} 
        status={character.status} 
         />
      ))}
      </div>
      <div className='divbutton' id='buttons'>
        <button className='button' onClick={addQueryParameters2}>{"<<"}</button>
        <button className='button2' onClick={() => addQueryParameters3(1)}>1</button>
        <button className='button2' onClick={() => addQueryParameters3(2)}>2</button>
        <button className='button2' onClick={() => addQueryParameters3(3)}>3</button>
        <button className='button2' onClick={() => addQueryParameters3(4)}>4</button>
        <button className='button2' onClick={() => addQueryParameters3(5)}>5</button>
        <button className='button' onClick={addQueryParameters}>{">>"}</button>
      </div>
      <div className='divbutton2' id='buttons2'>
        <button className='button' onClick={addQueryParameters2}>{"<<"}</button>
        <button className='button' onClick={addQueryParameters}>{">>"}</button>
      </div>
    </div>
    </>
  )
}

export default App;
