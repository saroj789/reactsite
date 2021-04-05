import React from 'react'
import Common from './Common'
import logo from '../src/images/img2.svg';


const Home  = () => {
    return (
      <>  
        < Common name='Grow your business with ' imgsrc={logo} visit='/contact' btnname='Contact Now' />
      </>
    )
}

export default Home ;