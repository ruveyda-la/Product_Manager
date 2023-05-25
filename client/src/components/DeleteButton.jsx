import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DeleteButton = (props) => {
    const {products,setProducts,id} = props
    const deleteHandler = (id) => {
        const newList = products.filter((item,idx) => (item._id !== id));
        setProducts(newList)
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <Link className='btn btn-danger' to={`/products`} onClick={() => deleteHandler(id)}>Delete</Link>
    </div>
  )
}

export default DeleteButton