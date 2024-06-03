import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
<div>
      <Header/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;
