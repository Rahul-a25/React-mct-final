import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length < 10) {
      alert("Please Add Your Password at least 10 char");
    } else if (email === "") {
      alert("please enter your email");
    } else {
      navigate("/Home");
    }
  };
  return (
    <div className='main'>
      <div className="leftmain">
        <div className="leftmaincontent">
        <h1>Welcome Back to <br /> Pretty Login</h1>
        <p style={{fontWeight:"600"}}>it's great to have your back!</p>

        {/* input wala section */}
        <div className='inputsection'>
           <label htmlFor="">Email</label><br />
           {/* onChange={inputwala}  */}
           <input  type ="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/><br /> <br />
           <label htmlFor="">Password</label><br />
       
           <input  type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}   />
            
            {/* checkbox wala section  */}

           <div className='checkboxpassword'>
            <div className="checkboxsection">
            <input style={{height:"20px"}} type="checkbox" /> <p>Remeber me?</p>
            </div>
           <span style={{marginRight:"100px"}}>Forget Password?</span> 
           </div>
         

         {/* button wala section  */}
         <div className="btn">
         <button   onClick={handleLogin} className='first'>LOGIN</button>
           <button className='second'>CREATE ACCOUNT</button>
         </div>

         <div className="lowersection">
            <p style={{fontWeight:"600",fontSize:"18px"}}>Or login with </p>
            <span style={{fontWeight:"700",fontSize:"18px",color:"#f11e68"}}>Facebook Google</span>
         </div>
           
        </div>
      </div>
      </div>
      <div className="rightmain">
        <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Login



