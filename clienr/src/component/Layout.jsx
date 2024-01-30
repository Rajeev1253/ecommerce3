import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header2'

const Layout = (props) => {
  return (
    <div>
    <Header/>
        <Navbar/>
        <main style={{minHeight:"80vh"}}>
    {props.children}

        </main>
        <Footer/>
    </div>
  )
}

export default Layout