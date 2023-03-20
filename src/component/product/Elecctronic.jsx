import React, { useEffect, useState } from 'react'
import "./electronics.css"

import Navbar  from '../Navbar'
const Elecctronic = () => {
    const [Item,setItem]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
          .then((res) => res.json())
          .then((data) => setItem(data));
        
      }, []);
  return (
    <div>
        <Navbar/>
       
          {Item.map((e)=>(
          <>
          <div className='mainpart'>
            <div className='nav'>
                <p style={{textAlign:"center",fontSize:"30px",fontWeight:"600"}}>Electronic Categories</p>

            </div>
            <div className="body">
            <div className="img">
<img src={e.image} alt="" />
</div>
 
<div className='content'>
    <p>Product Name</p>
    <span> {e.title}</span>
    <p>Product Price</p>
    <span>{e.price}</span>
    <p>Product Description</p>
    <span>{e.description}</span>
    <p>Product Rating</p>
    <span>{e.rating.rate}</span>
</div> 
              
                
            </div>
        </div>
          </>
  
      ))}

    </div>
  )
}

export default Elecctronic

          

 
