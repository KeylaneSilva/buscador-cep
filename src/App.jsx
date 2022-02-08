import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'
import './App.css'
import './service/api'
import api from './service/api';

function App() {
  
  const [input, setInput] = useState()
  const [cep, setCep] = useState({})

  const [estado, setEstado] = useState()
  const [cidade, setCidade] = useState()
  const [logradouro, setLogradouro] = useState()
  const [endCep, setEndCep] = useState([])

  //func consulta cep
  async function handleSearch(){
    //veriifcação de input vazio
    if(input == ""){
      alert('Preencha o cep')
      return
    }

    try{
      // conexão com a API
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setCep(response.data)
      setInput("")

    }catch{
      alert("Ops, erro ao tentar buscar")
      setInput("")
    }
  }
  
  async function handleSearch2(){
    if(estado == ''){
      alert('Preencha o UF')
      return
    }
    if(cidade == ''){
      alert('Preencha a Cidade')
      return
    }
    if(logradouro == ''){
      alert('Preencha o Logradouro')
      return
    }

    try{
      const response = await api.get(`${estado}/${cidade}/${logradouro}/json`)
      console.log(response.data)
      setEndCep(response.data)
      setEstado("")
      setCidade("")
      setLogradouro("")
      
    }catch(e){
      alert('Não foi possível encontrar o cep')
    }
  }

  const cepEncontrado = endCep.map((end) =>
    <main className='main'>
      <h2>Cep: {end.cep} </h2>
      <span>Bairro: {end.bairro}</span>
    </main> 
  )

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Cep e Endereços</h1>
      
      <div className="containerbuscaCep">
        <div className="container1">

          <div className='containerInput'>
            <input
              id="buscarcep" 
              type="number"
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
              <h2>CEP: {cep.cep}</h2>

              <span>Rua: {cep.logradouro}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Complemento: {cep.complemento}</span>
              <span>{cep.localidade} - {cep.uf}</span>

              <span>----------------------------------------------------------------</span>
              <h3>Informações adicionais</h3><br />
              <span>DDD: {cep.ddd}</span>
              <span>Ibge: {cep.ibge}</span>
              <span>Siafi: {cep.siafi}</span>
            </main>
          )}
        </div>
        
        <div className="container1">
          <div className='containerInput'>
            <div className="input2">
              <input 
                type="text"
                placeholder='Digite o UF'
                value={estado}
                onChange={e => setEstado(e.target.value)}
                />
              <input 
                type="text"
                placeholder='Digite a Cidade'
                value={cidade}
                onChange={e => setCidade(e.target.value)}
              />
              <input 
                type="text"
                placeholder='Digite o Logradouro'
                value={logradouro}
                onChange={e => setLogradouro(e.target.value)}
              />

              <button id="buttonx" className='buttonSearch' onClick={handleSearch2}>
                <FiSearch size={25} color='#FFF'/>
              </button>
            </div>
          </div>

          {Object.keys(endCep).length > 0 && (
            cepEncontrado
              )
            }
        
        </div>
      </div>
    </div>
  );
           
}

export default App;
