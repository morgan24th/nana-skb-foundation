import { TextField } from '@mui/material'
import React from 'react'
import data from '../database/data'
import Footer from './Footer'
import Header from './Header'

const Contact = () => {
  const {contact, pictures} = data

  return (
    <div className='main text-xl'>
      {/* header and content */}
      <div className='flex-1'>
        <Header active={'/contact'}/>
        {/* contact intro */}
        <div className='bg-green-50'>
          <div className='container'>
            <div>
              <div className='lg:flex lg:flex-row-reverse lg:items-center'>
                <div className='lg:mb-0 mb-8'>
                  <img src={pictures.contact} alt='contact'/>
                </div>
                <div>
                  <p>{contact.headingOne}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className='bg-yellow-50'>
          <div className='container'>
            <div className='lg:flex lg:flex-row '>
              {/* image */}
              <div>
                <div className='lg:mb-0 mb-8'>
                  <img src={pictures.relax} alt='relax'/>
                  <h1 className='mb-4 mt-12'>{contact.headingTwo}</h1>
                </div>
              </div>
              {/* form */}
              <TextField label='Username' required  color='primary'/>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Contact
