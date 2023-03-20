import React from 'react'
import "./navbar.css"
import { Link,Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul className='ulwala'>
            <li>
            <Link style={{textDecoration:"none"}} to="/Home">Home</Link> 
            </li>
            <li><Link style={{textDecoration:"none"}} to="/Product">Product</Link> </li>
            <li><Link style={{textDecoration:"none"}} to="/User">User</Link> </li>
            <li><Link style={{textDecoration:"none"}} to="/Contact">Contact</Link> </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Navbar
