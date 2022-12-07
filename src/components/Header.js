import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import data from '../database/data'
import '../Styles/support.css'

const Header = ({active}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const {navs} = data

  return (
    <div className='bg-white shadow-2xl w-full sticky z-10 top-0'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div>
            <Link to={'/'} ><h1 className='text-xl font-semibold cursor-pointer hover:scale-90 text-green-700 transition-all duration-100'>Nana SKB Foundation</h1></Link>
          </div>
          {/* navs */}
          <div className='hidden lg:flex'>
            <ul className='flex gap-x-6'>
              {navs.map((nav,index) =>{
                return(
                  <li className={`text-lg font-medium hover:scale-90 transition-all duration-100 ${active === nav.href ? 'text-green-700 font-extrabold' : ''}`}  key={index}> <Link to={nav.href} >{nav.name}</Link> </li>
                )
              })}
            </ul>
          </div>
          {/* drawer */}
          <div className='lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <CloseIcon className='cursor-pointer text-4xl font-semibold text-green-700' fontSize='large' /> : <SegmentIcon className='cursor-pointer text-4xl font-semibold text-green-700' fontSize='large' />}
          </div>
        </div>
        {/* mobile navs */}
        <div className={`${openMenu ? 'flex' : 'hidden'} lg:hidden fixed top-0 max-w-xs transition-all w-full h-screen bg-[rgba(255,255,255,0.8)] backdrop-blur-mds ${openMenu ? 'left-0' : '-left-full'}`}>
          <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl'>
            <ul className=' gap-y-5'>
              {navs.map((nav,index) =>{
                return(
                  <li className={`text-xl font-medium hover:text-green-700 transition-all p-2 ${active === nav.href ? 'text-green-700 font-extrabold' : ''}`} key={index}> <Link to={nav.href} >{nav.name}</Link> </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
