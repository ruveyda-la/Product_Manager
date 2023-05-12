import React, { useState } from 'react'
import axios from 'axios';
const Form= () => {
    const [ product, setProduct ] = useState({
        title:"",
        price:null,
        description:""
    })
    const submitHandler =(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products",{product})
            .then(res=>{console.log(res);
                        console.log(res.data);
                        setProduct({
                            title:"",
                            price:null,
                            description:""
                        })
                        })
            .catch(err=>console.log(err))
        };
        

    const changeHandler=(e)=>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    };
    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={changeHandler} className="form-control"/>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" onChange={changeHandler} className="form-control"/>
                <label htmlFor="title">Description:</label>
                <input type="text" name="description" onChange={changeHandler} className="form-control"/>
                <button type="button" className="btn btn-info">Create</button>
            </form>
        </div>
    )
}
export default Form;