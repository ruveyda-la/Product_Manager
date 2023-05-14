import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Update= () => {
    const navigate = useNavigate()
    const [errors,setErrors] = useState([])
    
    const [ product, setProduct ] = useState({
        title:"",
        price:"",
        description:""
    })
    const submitHandler =(e)=>{
        e.preventDefault(); 
        axios.patch(`http://localhost:8000/api/products/${id}`,product)
            .then(res=>{console.log(res);
                        navigate("/products")
                        })
            .catch((err) => {
                console.log(err);
                const errors = err.response.data.error.errors;
                const errList=[];
                for(const key of Object.keys(errors)){
                    errList.push(errors[key].message)
                };
                setErrors(errList);
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
            {errors && errors.map((item,idx)=>(
                <p key={idx} onClose={()=> setErrors([])} style={{color:"red"}}>{item}</p>
            ))}
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