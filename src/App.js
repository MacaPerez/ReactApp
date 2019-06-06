import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles-maca.scss';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App maca">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="maca">
          <h2 className="maca2">Macarena</h2>
          <Button variant="warning">Warning</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
