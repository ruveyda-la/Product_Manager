import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Index= () => {
    const [ message, setMessage ] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:8000")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, []);
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}
export default Index;