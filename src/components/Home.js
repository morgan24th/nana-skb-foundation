import React from 'react'
import Header from './Header'
import '../Styles/support.css'
import data from '../database/data'

const Home = () => {
  const {introduction, company, briefHistory, mission, vision, location} = data
  return (
    <div>
      <Header active={'/'}/>
      <div className='container p-5'>
        {/* banner */}
        <div className='lg:bg-banner lg:h-[580px] mb-8 lg:shadow-md lg:bg-cover lg:bg-no-repeat'>
          <div className='lg:p-8 rounded-md p-2'>
            {/* name and intro */}
            <div className='lg:mt-[12vh]'>
              <h1 className='text-4xl text-green-700 font-semibold mb-3'>{company.name}</h1>
              <p className='text-xl lg:w-[640px] lg:text-justify'>{introduction.content}</p>
            </div>
          </div>
        </div>
        {/* brief info */}
        <div className='mb-16'>
          <h1 className='text-4xl text-green-700 font-semibold mb-3'>{briefHistory.header}</h1>
          <p className='text-xl mb-6'>{briefHistory.contentOne}</p>
          <p className='text-xl'>{briefHistory.contentTwo}</p>
        </div>
        {/* mission & vision*/}
        <div className='lg:flex lg:justify-around lg:items-center mb-8'>
          {/* mission */}
          <div className='lg:mb-0 mb-8 lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <h1 className='text-4xl text-green-700 font-semibold mb-3'>{mission.heading}</h1>
            <p className='text-xl lg:w-[580px]'>{mission.content}</p>
          </div>
          {/* vission */}
          <div className='lg:mb-0 lg:mt-[-56px] lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <h1 className='text-4xl text-green-700 font-semibold mb-3'>{vision.heading}</h1>
            <p className='text-xl lg:w-[580px]'>{vision.content}</p>
          </div>
        </div>
        {/* location */}
        <div className='mb-8'>
          <h1 className='text-4xl text-green-700 font-semibold mb-3'>{location.heading}</h1>
          <p className='text-xl'>{location.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
