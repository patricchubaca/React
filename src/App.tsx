import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <h1>Patric Reativo</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
