import React from 'react'
import Header from './Header'

const Gallery = () => {
  return (
    <div>
      <div  className='w-10/12 m-auto'>
      <Header gallery={'text-purple-600'}/>
      <div className='p-5'>
        <h1 className='text-2xl text-purple-600'>Gallery</h1>
      </div>
    </div>
    </div>
  )
}

export default Gallery
