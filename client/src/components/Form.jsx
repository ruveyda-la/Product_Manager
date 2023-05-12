import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Form= () => {
    const navigate = useNavigate()
    // const [errors,setErrors] = useState("")
    const [ product, setProduct ] = useState({
        title:"",
        price:"",
        description:""
    })
    const submitHandler =(e)=>{
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/products",product)
            .then(res=>{console.log(res);
                        console.log(res.data);
                        navigate("/products")
                        // setProduct({
                        //     title:"",
                        //     price:null,
                        //     description:""
                        // })
                        })
            .catch((err) => {
                console.log(err);
                // setErrors(err.data)
            })
        };
        

    const changeHandler=(e)=>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    };
    return (
        <div className='container' style={{width:"600px", marginTop:"100px"}}>
            <form onSubmit={submitHandler} >
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={product.title} onChange={changeHandler}  className="form-control" style={{margin:"10px"}}/>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" value={product.price} onChange={changeHandler} className="form-control" style={{margin:"10px"}}/>
                <label htmlFor="title">Description:</label>
                <input type="text" name="description" value={product.description} onChange={changeHandler} className="form-control" style={{margin:"10px"}}/>
                <button type="submit" className="btn btn-info">Create</button>
            </form>
        </div>
    )
}
export default Form;