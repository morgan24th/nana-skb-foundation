import React from 'react'
import Footer from './Footer'
import Header from './Header'

const About = () => {
  return (
    <div className='main'>
      {/* header and body */}
      <div className='flex-1'>
        <Header active={'/about'}/>
        <div className='container'>
          <h1 className='text-[64px] text-green-700 font-semibold'>About</h1>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About
