import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'




function App() {


  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Works />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
