import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }
  
  return (

    <div className="App">
      <header className="App-header">
        <div className='Box'>
          <span> {number} </span>
          <button onClick={randomNumber} >Novo Numero</button>
        </div>
      </header>
    </div>

  );
}

export default App;
