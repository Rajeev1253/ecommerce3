import React,{useState} from "react";
import "./Styles/signup.css"
import image1 from '../assets/images/image 1174.png'
import axios from 'axios';
import  { toast}  from 'react-toastify';
import {Link,useNavigate} from 'react-router-dom'
import Layout from "../component/Layout";
const Signup = () => {
  const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [answer,setAnswer]= useState("");
    const handleSubmit = async(e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name,email,password,answer});
        if(response.data.success){
          navigate('/login');
          toast.success("Registered Sucessfully")
          
          
       }
       else{
      }
      
    } catch (error) {
      console.log( error)
      toast.error("Something went wrong")
      
      }
     
    };
  return (
    <Layout>
      <div>
      </div>
      <div className="main">
        <div className="signupBox">
          
    
          <div className="main-heading">
            <h3>Sign Up</h3>
            <p>Please login using account detail bellow.</p>
          </div>
            <div className="inputBox">
              <input type="text" className="form-control" name="name" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)} required />
              <input type="email" className="form-control" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <input type="password" className="form-control" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              <input type="text" className="form-control" name="Answer" placeholder="YOUR SECRET CODE" value={answer} onChange={(e)=>setAnswer(e.target.value)} required/>
            </div>
            <div className="SignIn">
        <button onClick={handleSubmit} className="sign-in" >Create Account</button>
        </div>
        <Link className='already' to='/login'>Already user</Link>
          
          
        </div>
      </div>
      <div className="companies2">
      <img src={image1} alt="imagedown"></img>
        
      </div>
    </Layout>
  );
};

export default Signup;
