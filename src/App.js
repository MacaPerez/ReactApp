import React from 'react';
import Layout from  './components/Layout'
import './css/main.scss';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
