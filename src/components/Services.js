import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Services = () => {
  return (
    <div className='main'>
      {/* header and content */}
      <div className='flex-1'>
        <Header active={'/services'}/>
        <div className='container'>
          <h1 className='font-semibold text-green-700 text-[64px]'>Services</h1>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Services
