import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Here are Some of My Work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
