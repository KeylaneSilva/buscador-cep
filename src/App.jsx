import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './App.css'
import './service/api'
import api from './service/api';

function App() {
  
  const [input, setInput] = useState()
  const [cep, setCep] = useState({})
  async function handleSearch(){
    if(input == ""){
      alert('Preencha o cep')
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setCep(response.data)
      setInput("")

    }catch{
      alert("Ops, erro ao tentar buscar")
      setInput("")
    }

  } 

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Cep</h1>
      
      <div className='containerInput'>
        <input 
          type="text"
          placeholder='Digite o seu cep'
          value={input}
          onChange={e => setInput(e.target.value)}
          />

          <button className='buttonSearch' onClick={handleSearch}>
            <FiSearch size={25} color='#FFF'/>
          </button>
      </div>

      {Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2>Cep: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>{cep.bairro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.localidade} - {cep.uf}</span>

      </main>
      
      )}

    </div>
  );
}

export default App;
