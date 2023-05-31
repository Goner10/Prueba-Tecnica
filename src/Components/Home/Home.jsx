import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'

import fondo from '../../assets/puppy2.jpg'

const Home = () => {
  return (
    <div className='container'>
    <img src={fondo} alt="fondo"  className='gatito'/>
    <div className='link-container'>
    <Link to="/products"><h2>PRODUCTS</h2></Link>
    </div>
    </div>
  )
}

export default Home