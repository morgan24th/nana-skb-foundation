import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Contact = () => {
  return (
    <div className='main'>
      {/* header and content */}
      <div className='flex-1'>
        <Header active={'/contact'}/>
        <div className='container'>
          <h1 className='lg:text-[64px] text-[48px] text-green-700 font-semibold'>Contact Us</h1>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Contact
