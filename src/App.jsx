import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import api from './services/api'

import "./App.sass";

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 01310930/json

    if(input === ''){
      alert('Fill in some zip code!\nPreencha algum cep!')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('')
    }catch{
      alert('oops error when fetching\noops erro ao buscar')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="container-title">CEP Finder</h1>

      <div className="container-input">
        <input type="text" placeholder="Enter your CEP..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="container-input-searchButton" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 1 && (
        <main className="container-main">
          <h2>CEP: {cep.cep}</h2>
          <span>Street: {cep.logradouro}</span>
          <span>Complement: {cep.complemento}</span>
          <span>Neighborhood: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
