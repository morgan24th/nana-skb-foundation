import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div  className='w-10/12 m-auto'>
      <Header home={'text-purple-600'}/>
      <div className='p-5'>
        <h1 className='text-2xl text-purple-600'>Home</h1>
      </div>
    </div>
  )
}

export default Home
