import axios from 'axios';
import { Link } from 'react-router-dom'
import {useEffect} from 'react'
import DeleteButton from './DeleteButton';

const Dashboard = (props) => {
    const {products,setProducts,setIsEdit, setProduct}=props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
             .then((res)=>{
              setProducts(res.data)
  
             })
             .catch((err)=>{
                console.log(err)
             })
    })


    

    const editHandler = (object) => {
        setProduct(object);
        setIsEdit(true);
    }

    const createHandler = () => {
        setIsEdit(false);
        setProduct({title:"",
                    price:"",
                    description:""});

    }

  return (
    <div className='container' style={{width:"1000px", marginTop:"100px"}}>
        <h4>Products</h4>
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
                    products.map((item,idx) => (
                        <tr key={idx}>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link className='btn btn-primary' to={`/products/${item._id}`}> View</Link> 
                                <Link className='btn btn-primary' to={`/products/edit`} onClick={() => editHandler(item)}>Edit</Link> 
                                <DeleteButton products={products} id={item._id} setProducts={setProducts}/>
                            </td>
                        </tr>
                    ))


                }    
            </tbody>
        </table>
        <Link to="/products/create" onClick={()=>createHandler()}>Add New Product</Link>



    </div>
  )
}

export default Dashboard