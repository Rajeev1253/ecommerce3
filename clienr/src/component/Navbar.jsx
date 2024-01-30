import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (

    <div className='main-container'>
    <div className='main-nav'>
    <div className='logo'>
    <h1>Hekto</h1>

    </div>
    <div className='pages'>
        <ul>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>Pages</a></li>
            <li><a href='/#'>Product</a></li>
            <li><a href='/#'>Shop</a></li>
            <li><a href='/#'>Blog</a></li>
            <li><a href='/#'>Contact</a></li>

        </ul>
    </div>
    <div className='search-box'>
    <div> 
    <input className='input'></input>
    </div>
    <div className='search-btn'>
        <SearchIcon/>
    </div>

    </div>

    </div>

    </div>
  )
}

export default Navbar;