import React from 'react'
import Common from './Common'
import logo from './images/hero-img.png';

const About  = () => {
    return (
      <>  
        < Common name='Welcome to About Page' imgsrc={logo} visit='/contact' btnname='Contact Now' />
      </>
    )
}

export default About ;