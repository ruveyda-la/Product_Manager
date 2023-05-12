
import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import Form from './components/Form';
import OneProduct from './components/OneProduct';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/products" element={<Dashboard/>}/>
        <Route path="/products/new" element={<Form/>}/>
        <Route path="/products/:id" element={<OneProduct/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
