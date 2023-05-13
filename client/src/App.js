
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import Update from './components/Update';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/products" element={<Dashboard/>}/>
        <Route path="/products/new" element={<Form/>}/>
        <Route path="/products/:id" element={<OneProduct/>}/>
        <Route path="/products/:id/edit" element={<Update/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
