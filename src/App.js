import React, { useState } from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida.js';

const App = () => {
  const [user, setUser] = useState("")
  return (
    <>
      <div className='taskBox'>
        <h1>Tarefa 2</h1>

        <br />
        <UsuarioEntrada setUser={setUser}/>
        <br />
        <br />
        <UsuarioSaida userName='Octávio Barbosa' />

      </div>

      <br />

      <div className='taskBox'>
        <h1>Desafio</h1>

        <br />

        <UsuarioSaida userName={user} />
      </div>

    </>
  )
}

export default App;