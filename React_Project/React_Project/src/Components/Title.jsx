
import React from 'react';

function Title(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <h1 className='nameTitle'>{props.title}</h1>;
}

export default Title;