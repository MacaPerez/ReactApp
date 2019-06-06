import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Layout from  './components/Layout'
import './css/main.scss';

function App() {
  return (
    <Layout className="App maca" maca="maca">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="maca">
          <h2 className="maca2">Macarena</h2>
          <Button variant="warning">Warning</Button>
        </div>
      </header>
    </Layout>
  );
}

export default App;
