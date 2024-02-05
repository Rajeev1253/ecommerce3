import React, { useState } from "react";
import image1 from '../assets/images/image 1174.png'
import "./Styles/login.css"
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import Layout from "../component/Layout";

const Forget = () => {
    const navigate=useNavigate();
    const [email,setEmail]= useState("");
    const [newpassword,setnewPassword]=useState("");
    const [answer,setAnswer]= useState("")
    const handleSubmit = async(e,req,res) => {
      e.preventDefault();
    
  
      try {
       const response = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {email,answer,newpassword});
       console.log(response)
       navigate('/login')
      
       
        console.log( response)
  
      } catch (error) {
          console.log(error)
        
  
      }   
     
    };
  return (
    <Layout>
         <div className="login-main">
      </div>
      <div className="Login">
      <div className="loginBox">
      <div className="login-heading">
            <h3>Reset Password</h3>
            <p>Enter security answer and new password</p>
          </div>
          <div className="inputBox">
            <input className="email" placeholder="Email Adress" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input className="text" placeholder="What is youre secret code?" value={answer} onChange={(e)=>{setAnswer(e.target.value)}}></input>
            <input className="password" placeholder="New Password" value={newpassword} onChange={(e)=>{setnewPassword(e.target.value)}}></input>
          </div>
          <div>
            {/* {err && <p>{err}</p>} */}
          </div>
          <div className="SignIn">
          <button onClick={handleSubmit} className="sign-in">Update Password</button>
        </div>
        </div>
      </div>
      <div className="companies">
      <img src={image1} alt="imagedown"></img>
        
      </div>
    </Layout>
  )
}

export default Forget