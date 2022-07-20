import React, { useState } from 'react'
import { Button } from '@mui/material'
import Header from './Header'
import data from '../database/data'
import Footer from './Footer'
import '../Styles/support.css'

const Home = () => {
  const {introduction, company, briefHistory, mission, vision, location, executives} = data
  const [showParagraph,setShowParagraph] = useState(false)
  return (
    <div  className='main'>
      {/* header and body */}
      <div className='flex-1'>
        <Header active={'/'}/>
          {/* banner */}
          <div className='bg-green-50'>
            <div className='container'>
              <div className='lg:bg-banner lg:h-[580px] lg:shadow-md lg:bg-cover lg:bg-no-repeat rounded-2xl'>
                <div className='lg:p-8 p-2'>
                  {/* name and intro */}
                  <div className='lg:mt-[12vh]'>
                    <h1 className='text-3xl lg:text-5xl text-green-700 font-semibold mb-3'>{company.name}</h1>
                    <p className='text-xl lg:w-[640px] lg:text-justify'>{introduction.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* brief info */}
          <div className='bg-green-50'>
            <div className='container'>
              <div>
                <h1 className='text-4xl text-green-700 font-semibold mb-3'>{briefHistory.header}</h1>
                <p className={`text-xl ${showParagraph ? 'mb-6' : 'mb-0'} text-justify`}>{briefHistory.contentOne}</p>
                <div>
                  <p className={`text-xl ${showParagraph ? 'flex' : 'hidden'} transition-all duration-500 text-justify`}>{briefHistory.contentTwo}</p>
                  <Button variant='text' color='success' className='material-button' onClick={() => setShowParagraph(!showParagraph)}>{showParagraph ? 'Read Less' : 'Read More'}</Button>
                </div>
              </div>
            </div>
          </div>
          {/* mission & vision*/}
          <div className='bg-yellow-50 p-5'>
            <div className='container'>
              <div className='hidden lg:flex lg:justify-center lg:mb-16'>
                <h1 className='text-4xl text-green-700 font-semibold uppercase underline'>{company.aim}</h1>
              </div>
              <div className='lg:flex lg:justify-around lg:items-start'>
                {/* mission */}
                <div className='lg:mb-0 mb-8 lg:flex lg:flex-col lg:justify-center lg:items-center'>
                  <h1 className='text-3xl text-green-700 font-semibold mb-3'>{mission.heading}</h1>
                  <p className='text-xl lg:w-[540px] text-justify lg:h-40'>{mission.content}</p>
                </div>
                {/* vission */}
                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
                  <h1 className='text-3xl text-green-700 font-semibold mb-3'>{vision.heading}</h1>
                  <p className='text-xl lg:w-[540px] text-justify lg:h-40'>{vision.content}</p>
                </div>
              </div>
            </div>
          </div>
          {/* location plus Image*/}
          <div className=' bg-green-50 p-5'>
            <div className='container'>
              <div className='lg:flex lg:justify-between items-start'>
                {/* location */}
                <div className='mb-8 lg:mr-5'>
                  <h1 className='text-4xl text-green-700 font-semibold mb-3'>{location.heading}</h1>
                  <p className='text-xl text-justify'>{location.content}</p>
                </div>
                {/* image */}
                <div>
                  <img className='rounded-md shadow-md hover:cursor-pointer hover:scale-110 transition-all duration-300' src={executives[1].image} alt='location'/>
                </div>
                </div>
            </div>
          </div>
      </div>
      {/* footer lies here */}
      <Footer/>
    </div>
  )
}

export default Home
