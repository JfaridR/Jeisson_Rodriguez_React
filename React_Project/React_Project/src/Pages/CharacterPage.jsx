
import React from "react";
import '../App.css'
import CharacterCard from '../Components/CharacterCard'
import { useState, useEffect } from 'react'

function CharacterPage(props) {

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

export default CharacterPage;