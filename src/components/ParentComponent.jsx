import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export const ParentComponent = () => {

  //  Definir un estado local con un mensaje
  const [ message ] = useState("¡¡Hola desde el componente Padre!!");

  const [ response, setResponse ] = useState();

  //  Función para recibir la respuesta del hijo
  const handleChildResponse = (ChildMessage) => {
    setResponse(ChildMessage);
  }

  return (
    <div className='parent'>
      <h2>Parent Component</h2>
      <ChildComponent message={message} onRespond={handleChildResponse} />
      {response}
    </div>
  )
}
