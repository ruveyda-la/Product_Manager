import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Update= () => {
    const navigate = useNavigate()
    
    const [ product, setProduct ] = useState({
        title:"",
        price:"",
        description:""
    })
    const submitHandler =(e)=>{
        e.preventDefault(); 
        axios.patch(`http://localhost:8000/api/products/${id}`,product)
            .then(res=>{console.log(res);
                        console.log(res.data);
                        navigate("/products")
                        })
            .catch((err) => {
                console.log(err);
            })
        };
        

    const changeHandler=(e)=>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    };
    const {id} = useParams()
    useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
          setProduct(res.data)
        })
        .catch((err) => console.log(err))
    },[id])
    return (
        <div className='container' style={{width:"600px", marginTop:"100px"}}>
            <form onSubmit={submitHandler} >
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={product.title} onChange={changeHandler}  className="form-control" style={{margin:"10px"}}/>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" value={product.price} onChange={changeHandler} className="form-control" style={{margin:"10px"}}/>
                <label htmlFor="title">Description:</label>
                <input type="text" name="description" value={product.description} onChange={changeHandler} className="form-control" style={{margin:"10px"}}/>
                <button type="submit" className="btn btn-info">Update</button>
            </form>
        </div>
    )
}
export default Update