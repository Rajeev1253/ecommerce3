import React, { useState } from "react";
import image1 from '../assets/images/image 1174.png'
import "./Styles/login.css"
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import Layout from "../component/Layout";

const Login = () => {
  const navigate=useNavigate();
  const [err, setErr] = useState("")
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();

    const newUser = {email,password};
    try {
     const response = await axios.post("http://localhost:8080/api/users/login", newUser);
     navigate('/')
      console.log( response)
    } catch (error) {
      setErr( error.response.data.message)
      console.log("err", error.response.data)
      

    }   
   
  };
  return (
    <Layout>
      <div className="login-main">
        <div className="heading">
          <h1>My Account</h1>
          <div>
            <span>Home.</span>
            <span>Pages.</span>
            <span>MyAccount</span>
          </div>
        </div>
      </div>
      <div className="Login">
      <div className="loginBox">
      <div className="login-heading">
            <h3>Login</h3>
            <p>Please login using account detail bellow.</p>
          </div>
          <div className="inputBox">
            <input className="email" placeholder="Email Adress" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input className="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>
          <div>
            {err && <p>{err}</p>}
          </div>
          <span className="forget">Forget your Password</span>
          <Link className="forget" to='/Signup'>Sign up </Link>
          <div className="SignIn">
          <button onClick={handleSubmit} className="sign-in">Sign</button>
        </div>
        </div>
      </div>
      <div className="companies">
      <img src={image1} alt="imagedown"></img>
        
      </div>
    </Layout>
  );
};

export default Login;
