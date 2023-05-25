import {React, useState } from 'react'
import { useNavigate,Link} from 'react-router-dom';
import axios from 'axios';


const Form= (props) => {
    const {isEdit,setIsEdit,product,setProduct} = props
    const navigate = useNavigate()
    const [errors,setErrors] = useState([])

    const submitHandler =(e)=>{
        e.preventDefault();
        isEdit?
        axios.patch(`http://localhost:8000/api/products/${product._id}`,product)
                .then(res => {console.log(res);
                                navigate("/products")
                                setIsEdit(false)
                                setProduct({
                                    title:"",
                                    price:"",
                                    description:""
                                })
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
        :axios.post("http://localhost:8000/api/products",product)
                .then(res=>{console.log(res);
                        console.log(res.data);
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
    return (
        <div className='container' style={{width:"600px", marginTop:"100px"}}>
            <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h5>{ isEdit ? "Update Product" : "Add a New Product"}</h5>
            <p><Link to="/products" >Dashboard</Link></p>
            </div>
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
                <button type="submit" className="btn btn-info">{isEdit ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}
export default Form;