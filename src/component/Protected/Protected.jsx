import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    console.log(props);
    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        const login=localStorage.getItem('login')
        if (!login) {
            navigate("/Login")
        }
    })
  return (
    <div>
       <Component/>
    </div>
  )
}

export default Protected
