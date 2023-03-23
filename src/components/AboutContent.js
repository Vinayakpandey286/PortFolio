import '../styles/AboutContent.css'
import IntroImg from '../uploads/IntroImg.jpg'
import pro1 from '../uploads/pro1.jpg'
// import {Link} from 'react-router-dom'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a Software Developer currently working in Cognizant with over a 1+ year of Experience in hand. I am Technology Enthusiast who loves working on Web Devlopment technologies.</p>
            <a href="/" target="_blank" rel='noreferrer'>
                <button className='btn'>
                    Resume
                </button>
            </a>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-top'>
                    <img src={IntroImg} className='img' alt='true'>
                    </img>
                </div>
                <div className='img-bottom'>
                    <img src={pro1} className='img' alt='true'>
                    </img>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
