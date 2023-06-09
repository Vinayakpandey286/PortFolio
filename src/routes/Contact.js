import React from 'react'
import ContactContent from '../components/ContactContent'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" text="Let's have a Chat"/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Contact
