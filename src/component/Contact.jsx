import React, { useContext } from 'react'

import './contact.css'
import { Link,Outlet } from 'react-router-dom'
import {Firstname} from '../index'
import Logout from './Logout'
const Contact = () => {
  const fname=useContext(Firstname);

  return (
    <>
    <div>
    <ul className='ulwala'>
            <li>
            <Link style={{textDecoration:"none"}} to="/Home">Home</Link> 
            </li>
            <li><Link style={{textDecoration:"none"}} to="/Product">Product</Link> </li>
            <li><Link style={{textDecoration:"none"}} to="/User">User</Link> </li>
            <li><Link style={{textDecoration:"none"}} to="/Contact">Contact</Link> </li>
            <li><Logout/></li>
        </ul>
        <Outlet/>
    </div>
   
    <div style={{margin:"50px auto"}}>
        <h1 style={{textAlign:"center",color:"red"}}>{fname}</h1>
    </div>
    </>
  )
}

export default Contact
