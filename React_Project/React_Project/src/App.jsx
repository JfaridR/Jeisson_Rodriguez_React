import './App.css'
import React from 'react';
import Title from './Components/Title';
import Image from './Components/Image';
import Details from './Components/Details';
import Rick from '../src/assets/Rick.jpeg'

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

function App() {
  return (
    <div className='cardContainer'>
      <Image url={Rick}/>
      <Title title='Rick Martin'/>
      <Details genre= "Human" status= "Alive"/>
    </div>
  );
}


export default App;
