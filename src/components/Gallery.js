import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Gallery = () => {
  return (
    <div className='main'>
      {/* header and content */}
      <div className='flex-1'>
        <Header active={'/gallery'}/>
        <div className='container'>
          <h1 className='text-[64px] text-green-700 font-semibold'>News / Gallery</h1>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Gallery
