import React, { useState } from 'react'
import Header from './Header'
import '../Styles/support.css'
import data from '../database/data'
import Footer from './Footer'
import { Button } from '@mui/material'

const Home = () => {
  const {introduction, company, briefHistory, mission, vision, location} = data
  const [showParagraph,setShowParagraph] = useState(false)
  return (
    <div  className='main'>
      {/* header and body */}
      <div className='flex-1'>
        <Header active={'/'}/>
        <div className='container'>
          {/* banner */}
          <div className='lg:bg-banner lg:h-[580px] mb-8 lg:shadow-md lg:bg-cover lg:bg-no-repeat rounded-2xl'>
            <div className='lg:p-8 p-2'>
              {/* name and intro */}
              <div className='lg:mt-[12vh]'>
                <h1 className='text-3xl lg:text-5xl text-green-700 font-semibold mb-3'>{company.name}</h1>
                <p className='text-xl lg:w-[640px] lg:text-justify'>{introduction.content}</p>
              </div>
            </div>
          </div>
          {/* brief info */}
          <div className='mb-12'>
            <h1 className='text-4xl text-green-700 font-semibold mb-3'>{briefHistory.header}</h1>
            <p className={`text-xl ${showParagraph ? 'mb-6' : 'mb-0'}`}>{briefHistory.contentOne}</p>
            <div>
              <p className={`text-xl ${showParagraph ? 'flex' : 'hidden'} transition-all duration-500`}>{briefHistory.contentTwo}</p>
              <Button variant='text' color='success' className='material-button' onClick={() => setShowParagraph(!showParagraph)}>{showParagraph ? 'Read Less' : 'Read More'}</Button>
            </div>
          </div>
          {/* mission & vision*/}
          <div className='hidden lg:flex lg:justify-center lg:mb-16'>
            <h1 className='text-4xl text-green-700 font-semibold uppercase underline'>{company.aim}</h1>
          </div>
          <div className='lg:flex lg:justify-around lg:items-start mb-8'>
            {/* mission */}
            <div className='lg:mb-0 mb-8 lg:flex lg:flex-col lg:justify-center lg:items-center'>
              <h1 className='text-3xl text-green-700 font-semibold mb-3'>{mission.heading}</h1>
              <p className='text-xl lg:w-[580px]'>{mission.content}</p>
            </div>
            {/* vission */}
            <div className='lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-center'>
              <h1 className='text-3xl text-green-700 font-semibold mb-3'>{vision.heading}</h1>
              <p className='text-xl lg:w-[580px]'>{vision.content}</p>
            </div>
          </div>
          {/* location plus Image*/}
          <div>
            {/* location */}
            <div className='mb-8'>
              <h1 className='text-4xl text-green-700 font-semibold mb-3'>{location.heading}</h1>
              <p className='text-xl'>{location.content}</p>
            </div>
            {/* image */}
          </div>
        </div>
      </div>
      {/* footer lies here */}
      <Footer/>
    </div>
  )
}

export default Home
