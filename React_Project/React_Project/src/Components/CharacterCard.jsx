
/*
const CharacterCard = (props) => {
    const {title, image, genre, status} = props
    return (
        <>
            <div className='cardContainer2'>
                <img className='rickImg' src={image} />
                <h2 className='nameTitle'>{title}</h2>
                <p className='details'>{genre}</p>
                <p className='details'>{status}</p>
            </div>
        </>
    )
}
*/

import React from 'react';
import Title from './Title';
import Image from './Image';
import Details from './Details';

function CharacterCard(props) {
    // Recuerda que este es solo un componente funcional, 
    // tu debes incluir estilos para hacerlo más atractivo
    return (
      <div className='cardContainer2'>
        <Image url={props.image}/>
        <Title title={props.name}/>
        <Details 
          genre={props.genre} 
          status={props.status} 
        />
      </div>
    );
  }


export default CharacterCard