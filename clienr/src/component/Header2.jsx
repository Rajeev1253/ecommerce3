import React from "react";
import "./header.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../context/Auth";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [auth,setAuth]= useAuth();
  const handleLogout = ()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
  }
  return (


    <div className="header">
      <div className="headerTop">
        <div className="header-left">
          <div class="mail">
            <MailOutlineIcon sx={{width:16,height:16}} />
            <p className="mail-text">mhhasanul@gmail.com</p>
            <div className="call">
              <CallIcon sx={{width:16,height:16}} />
              <p className="call-text">(12345)67890</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="Eng">
            <p>English</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="USD">
            <p>USD</p>
            <KeyboardArrowDownIcon />
            </div>
          { !auth.user?(
            <>
            <div className="login-icon">
            <a href="/login">Login</a>
          </div>

            </>
          ) :(
            <>
            
            <li className="nav-item dropdown">
            <a clasName="nav-link dropdown-toggle " href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
            </a>
            <ul class="dropdown-menu">
              <li><NavLink to ={`/dashboard/${auth?.user?.role===1?"admin":"user"}`} className="dropdown-item" >Dashboard</NavLink></li>
              <li><a to="/login" onClick={handleLogout} >Logout</a> </li> 
            </ul>
          </li>



            </>
          ) }
          
          <div className="whish">
            <p>WhishList</p>
            <FavoriteBorderIcon />
          </div>
          <div className="cart">
            <p>
              <ShoppingCartIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
