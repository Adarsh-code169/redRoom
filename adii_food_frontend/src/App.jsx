import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Product from './components/Product'
import Review from './components/Review.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      {/* <Review/> */}
      <Contact/>
      <Footer/>
    
    </div>
  )
}

export default App