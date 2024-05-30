
import React from 'react';

function Details(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
        <p className='details'>
          <b>Genero: </b> {props.genre}
        </p>
        <p className='details'>
          <b>Estado: </b>{props.status}
        </p>
    </div>
  );
}
export default Details;