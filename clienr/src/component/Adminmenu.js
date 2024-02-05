import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/Auth'
const Adminmenu = () => {
    const [auth]= useAuth();
  return (
    <>
        <div className='Menu' style={{textAlign:'center'}}>
        <h4>Admin Panel</h4>
        <NavLink to="/dashboard/admin/create-category" style={{display:'flex', flexDirection:'column'}}>Create Category</NavLink>
        <NavLink to="/dashboard/admin/create-product">Create Product</NavLink>
        <br/>
        <NavLink to="/dashboard/admin/users">Users</NavLink>

        </div>
        <div className='details'>
        <h3>Admin Name:  {auth?.user?.name}</h3>
        <h3>Admin Email: {auth?.user?.email}</h3>
        
        

        </div>
    </>

  )
}

export default Adminmenu