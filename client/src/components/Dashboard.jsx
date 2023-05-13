import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Dashboard = () => {
    const [state,setState]=useState([]);
    const navigate = useNavigate()
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
             .then((res)=>{
                setState(res.data)
                navigate("/products")

             })
             .catch((err)=>{
                console.log(err)
             })
    },[navigate])

    const deleteHandler = (id) => {
        const newList = state.filter((item,idx) => (item._id !== id));
        setState(newList)
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className='container' style={{width:"1000px", marginTop:"100px"}}>
        <h2>Products</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th> 
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((item,idx) => (
                        <tr key={idx}>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link to={`/products/${item._id}`}> View</Link> |
                                <Link to={`/products/${item._id}/edit`}>Edit</Link> |
                                <Link to={`/products`} onClick={() => deleteHandler(item._id)} style={{color:"red"}}>Delete</Link>
                            </td>
                        </tr>
                    ))


                }    
            </tbody>
        </table>
        <Link to="/products/new" >Add New Product</Link>



    </div>
  )
}

export default Dashboard