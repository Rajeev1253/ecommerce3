import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header2'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <div>
    <Header/>
        <Navbar/>
        <main style={{minHeight:"80vh"}}>
        <ToastContainer/>
    {props.children}

        </main>
        <Footer/>
    </div>
  )
}

export default Layout