import React from 'react'
import Layout from '../component/Layout'
import { useAuth } from '../context/Auth.js'

const Home = () => {
  const [auth,setAuth]= useAuth()
  return (
    <Layout>
    <h1>homepage</h1>
    </Layout>
  )
}

export default Home