import React, { useState } from 'react'
import { Button } from '@mui/material'
import data from '../database/data'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'


const About = () => {
  const {briefHistory, company, executives, introduction, mission, vision, management, auxilary, location, adminStructure, board, pictures} = data
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='main text-xl lg:text-justify'>
      <div className='flex-1'>
        <Header active={'/about'}/>
        {/* About Us and Intro*/}
        <div className='bg-green-50'>
          <div className='container'>
            <div className='lg:flex lg:flex-row-reverse lg:justify-around lg:items-center gap-x-4'>
              {/* content */}
              <div className='lg:max-w-[640px]'>
                <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{introduction.about}</h1>
                <p>{introduction.content}</p>
              </div>
              {/* image */}
              <div>
                <img src={pictures.relax} alt='home'/>
              </div>
            </div>
          </div>
        </div>
        {/* Brief History */}
        <div className='bg-green-50'>
          <div className='container'>
            {/* content */}
            <div>
              <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{briefHistory.header}</h1>
              <p className=''>{briefHistory.contentOne}</p>
              <p className={`${showMore ? 'flex' : 'hidden'} mt-4`}>{briefHistory.contentTwo}</p>
              <Button className='material-button' onClick={() => {setShowMore(!showMore)}} variant='text' color='success'>{showMore ? 'Read Less' : 'Read More'}</Button>
              </div>
          </div>
          {/* image */}
        </div>
        {/* mission and vision */}
        <div className='bg-blue-50'>
          <div className='container'>
            {/* content */}
            <div className='hidden lg:flex mb-8 mt-10 justify-center'>
              <h1 className=' text-4xl text-green-700 font-semibold text-center lg:uppercase lg:underline'>{company.aim}</h1>
            </div>
            <div className='lg:flex lg:justify-around items-start mt-6 mb-10'>
              {/* mission */}
              <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
                <h1 className='text-3xl font-semibold text-green-700 mb-3'>{mission.heading}</h1>
                <p className='lg:w-[540px]'>{mission.content}</p>
              </div>
              {/* visiion */}
              <div className='mt-8 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center'>
                <h1 className='text-3xl font-semibold text-green-700 mb-3'>{vision.heading}</h1>
                <p className='lg:w-[540px]'>{vision.content}</p>
              </div>
            </div>
          </div>
        </div>
        {/* administrative structure */}
        <div className='bg-blue-50'>
          <div className='container'>
            <div>
            {/* heading */}
            <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{adminStructure.heading}</h1>
            {/* content */}
            <p>{adminStructure.info}</p>
            </div>
          </div>
        </div>
        {/* baord */}
        <div  className='bg-blue-50'>
          <div className='container'>
            <div className='lg:flex lg:justify-around items-center'>
              {/* content */}
              <div>
                <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{board.title}</h1>
                <p>{board.info}</p>
                <ul className='mt-4'>
                  {
                    board.listOfDirectors.map((director,index) =>{
                      return(
                        <li className='text-green-800 list-inside list-disc my-2 font-thin' key={index}>{director}</li>
                      )
                    })
                  }
                </ul>
              </div>
              {/* image */}
              <div>
                <img src={pictures.team} alt='board'/>
              </div>
            </div>
          </div>
        </div>
        {/* management */}
        <div className='bg-yellow-50 p-5 text-left'>
          <div className='container'>
            <div className='lg:flex lg:flex-row-reverse lg:justify-around lg:items-center'>
              {/* content */}
              <div>
                {/* heading */}
                <div>
                  <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{management.heading}</h1>
                  <p>{management.info}</p>
                </div>
                {/* list */}
                <div>
                  <ul>
                    {
                      management.list.map((item,index) =>{
                        return(
                          <li className='text-green-800 list-inside list-disc my-2 font-thin' key={index}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {/* image */}
              <div className=' lg:mr-7'>
                <img className='lg:w-[520px]' src={pictures.management} alt='management'/>
              </div>
            </div>
          </div>
        </div>
        {/* auxilaty */}
        <div className='bg-yellow-50'>
          <div className='container'>
            <div className='lg:flex lg:justify-around lg:items-center'>
              {/* content */}
              <div className='lg:mr-[28px]'>
                {/* heading */}
                <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{auxilary.heading}</h1>
                {/* list */}
                <div>
                  <ul>
                    {
                      auxilary.list.map((item,index) =>{
                        return(
                          <li className='text-green-800 list-inside list-disc my-2 font-thin' key={index}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                {/* info */}
                <div>
                  <p>{auxilary.info}</p>
                </div>
              </div>
              {/* image */}
              <div className='mt-5 lg:mt-0'>
                <img src={pictures.auxilary} alt='auxilary'/>
              </div>
            </div>
          </div>
        </div>
        {/* exdcutives */}
        <div className='bg-green-50'>
          <div className='container'>
            <div>
              {/* heading */}
              <div className='flex justify-center my-8'>
                <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{company.executives}</h1>
              </div>
              {/* slide */}
              <div>
                <Slider details={executives}/>
              </div>
            </div>
          </div>
        </div>
        {/* location */}
        <div className='bg-green-50'>
          <div className='container'>
            <div className='lg:flex lg:justify-around lg:items-start mt-10 lg:mt-14'>
              {/* content */}
              <div className='lg:mr-5'>
                <h1 className='lg:text-5xl text-3xl text-green-700 font-semibold mb-4'>{location.heading}</h1>
                <p>{location.content}</p>
              </div>
              {/* image */}
              <div className='mb-8'>
                <img className='rounded-md shadow-md hover:cursor-pointer hover:scale-110 transition-all duration-300' src={executives[1].image} alt='map'/>
              </div>
            </div>
          </div>
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
