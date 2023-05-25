
import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import axios from 'axios';





function App() {
  const [isEdit, setIsEdit] = useState(false);

  const [products, setProducts]=useState([]);

  const [ product, setProduct ] = useState({
    title:"",
    price:"",
    description:""
})
    

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/products" element={<Dashboard products={products} setProducts={setProducts} setIsEdit={setIsEdit} product={product} setProduct={setProduct}/>}/>
        <Route path="/products/create" element={<Form isEdit={isEdit} setIsEdit={setIsEdit} products={products} product={product} setProduct={setProduct}/>}/>
        <Route path="/products/edit" element={<Form isEdit={isEdit} setIsEdit={setIsEdit} products={products} product={product} setProduct={setProduct}/>} />
        <Route path="/products/:id" element={<OneProduct/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
