import { FiSearch } from 'react-icons/fi'
import './App.css'

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Buscador de Cep</h1>
      
      <div className='containerInput'>
        <input 
          type="text"
          placeholder='Digite o seu cep' />

          <button className='buttonSearch'>
            <FiSearch size={25} color='#FFF'/>
          </button>
      </div>

      <main className='main'>
        <h2>Cep: 64003715</h2>

        <span>rua</span>
        <span>bairro</span>
        <span>cidade</span>
        <span>estado</span>

      </main>

    </div>
  );
}

export default App;
