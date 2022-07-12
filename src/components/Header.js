import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({home,about,services,gallery,contact}) => {
  return (
    <div>
        {/* Desktop Header */}
        <div className='flex justify-between items-center p-5'>
          {/* Logo */}
            <div> 
              <h1>Nana SKB Foundation</h1>
            </div>
            {/* Navs */}
            <div>
              <ul className='flex justify-around items-center'>
                <li className={`mx-5 ${home}`}> <Link to={'/'}>Home</Link> </li>
                <li className={`mx-5 ${about}`}> <Link to={'/about'}>About</Link> </li>
                <li className={`mx-5 ${services}`}> <Link to={'/services'}>Services</Link> </li>
                <li className={`mx-5 ${gallery}`}> <Link to={'/gallery'}>Gallery/News</Link> </li>
                <li className={`mx-5 ${contact}`}> <Link to={'/contact'}>Contact Us</Link> </li>
              </ul>
            </div>
            {/* Social links */}
            <div>
              <h1>FB</h1>
            </div>
        </div>
        {/* Mobile Header */}
        <div></div>
    </div>
  )
}

export default Header
