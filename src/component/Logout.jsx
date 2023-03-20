
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Logout = () => {
  const navigate=useNavigate();
    const handleClick=()=>{
        localStorage.clear();
        navigate('/Login')
    }
    return (
        <>
            <button className='out' style={{padding:"5px",width:"90px",borderRadius:"5px",marginTop:"-20px",fontSize:"17px"}} onClick={handleClick}>Logout</button>
        </>
    )
}

export default Logout


