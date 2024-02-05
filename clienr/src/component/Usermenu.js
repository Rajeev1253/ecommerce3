import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Usermenu = () => {
    const [auth]= useAuth();
  return (
    <>
    <div className='Menu' style={{textAlign:'center'}}>
    <h4>user Panel</h4>
    <NavLink to="/dashboard/user/profile" style={{display:'flex', flexDirection:'column'}}>UserProfile</NavLink>
    <NavLink to="/dashboard/user/order">Orders</NavLink>
    <br/>

    </div>
    <div className='user_details'>
    <h3>User Name: {auth?.user?.name}</h3>
    <h3>User Email:{auth?.user?.email}</h3>

    </div>

</>

  )
}

export default Usermenu