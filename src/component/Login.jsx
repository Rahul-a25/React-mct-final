import React, { useRef } from "react";
// import { useNavigate } from 'react-router-dom'
import "./login.css"
import Home from "./Home";



const Login = () => {
//   const navigate = useNavigate();
const email=useRef()
const password=useRef()
const getEmail=localStorage.getItem("emailData")
const getPassword=localStorage.getItem("passwordData")
const handleLogin=()=>{
    if(email.current.value==="rahularora@gmail.com"&&password.current.value==="12345678"){
        localStorage.setItem("emailData","rahularora@gmail.com")
        localStorage.setItem("passwordData","12345678")
    }
    else{
      alert("Wrong Email & Password")
    }
}
  return (
    <>
    { 
            getEmail&&getPassword?
            <Home/>  :
    <div className='main'>
       
      <div className="leftmain">
        <div className="leftmaincontent">
        <h1 style={{}}>Welcome Back to <br /> Pretty Login</h1>
        <p style={{fontWeight:"600",}}>it's great to have your back!</p>

        {/* input wala section */}
        <div className='inputsection'>
            <form action="">
           <label style={{}} htmlFor="">Email</label><br />
           <input ref={email}  type ="email"/><br /> <br />
           <label style={{}} htmlFor="">Password</label><br />
       
           <input ref={password} type="password"  />
           <div className='checkboxpassword'>
            <div className="checkboxsection">
            <input style={{height:"20px",}} type="checkbox" /><p style={{}} > Remeber me?</p>
            </div>
            <div className="pass"><span style={{marginRight:"100px",}}>Forget Password?</span> </div>
           
           </div>
         {/* button wala section  */}
         <div className="btn">
        
         <button   onClick={handleLogin}  className='first'>LOGIN</button>
           <button className='second'>CREATE ACCOUNT</button>
         </div>

         <div className="lowersection">
            <p style={{fontWeight:"600",fontSize:"18px",}}>Or login with </p>
            <span style={{fontWeight:"700",fontSize:"18px",color:"#f11e68"}}>Facebook Google</span>
         </div>
         </form>
        </div>
      </div>
      </div>
      <div className="rightmain">
        <img style={{borderRadius:"10px"}} src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" />
      </div>
      
    </div>
    }
    </>
  )
}

export default Login



