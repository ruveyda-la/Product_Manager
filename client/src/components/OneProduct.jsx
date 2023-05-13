import {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const OneProduct = () => {
  const {id} = useParams()
  const[state,setState] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
          setState(res.data)
        })
        .catch((err) => console.log(err))
  },[id])
  return (
    <div className="card" style={{width:"500px",margin:"0 auto", marginTop:"100px"}}>
      <div className="card-body">
        <h5 className="card-title">{state.title}</h5>
        <p className='card-text'>${state.price}</p>
        <p className='card-text'>{state.description}</p>
      </div>
    </div>
  )
}

export default OneProduct