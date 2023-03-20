import React, { useEffect, useState } from 'react'
import "./product.css"
import { Link,Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Product = () => {
    const [Data, SetData]=useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
          .then((res) => res.json())
          .then((result) => SetData(result));
       
      }, []);
  return (
    <>
    <Navbar/>
    <div className='productmain' style={{height:"500px", display:"flex"}}>
      <div className='left'>
               
                <ul>
                    
                    <li>
            <Link style={{textDecoration:"none"}} to="/Electronic">Electronics</Link>
              </li>
              <li>
            <Link style={{textDecoration:"none"}} to="/Jewellery">Jewelery's</Link>
              </li>
              <li>
            <Link style={{textDecoration:"none"}} to="/Menscloth">Mens Clothing</Link>
              </li>
              <li>
            <Link style={{textDecoration:"none"}} to="/Womencloth">Women Clothing</Link>
              </li>
              < Outlet/> 
              </ul>
             
             <Outlet/>
        
          
      </div>
      <div className='right'>
        <ul>
         <li>WD 2TB Elements Portable External Hard Drive - USB 3.0</li>
         <li>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</li>
         <li>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</li>
         <li>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</li>
         <li>Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</li>
         <li>Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)  Super Ultrawide Screen QLE</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Product;
