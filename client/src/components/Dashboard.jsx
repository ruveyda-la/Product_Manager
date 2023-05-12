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
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td></td>
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