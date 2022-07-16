import React from 'react'
import data from '../database/data'


const Footer = () => {
    const {client,creator} = data
  return (
    <div className='bg-green-700 p-0 lg:p-8 text-white text-lg lg:text-xl'>
      <div className='container p-8'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-10 lg:gap-y-0 mt-5'>
          {/* client info */}
          <div>
            <h1 className='text-yellow-300 font-semibold'>{client.name}</h1>
            <h1>{client.email}</h1>
            <h1>{client.phone}</h1>
            <h1>{client.offidceAddress}</h1>
            <h1>{client.gps}</h1>
            <h1>{client.location}</h1>
            <h1>{client.copyRight} &copy; {client.dateCreated}</h1>
          </div>
          {/* creators info */}
         <div className='mt-8 lg:mt-0 gap-y-4'>
            <h1>{creator.name}</h1>
            <h1>{creator.email}</h1>
            <h1>{creator.phone}</h1>
            <h1 className='cursor-pointer hover:text-yellow-400 transition-all duration-200'>{creator.visit}</h1>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
