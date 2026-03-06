import logo from '/logo.svg?url'
import hum from '/icon-hamburger.svg?url'
import close from '/icon-close.svg?url'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
            <nav className=' relative  flex justify-between items-center my-10  '>
                <img className='ml-8' src={logo} alt="Logo"/>
                <img className='mr-8 md:hidden ' src={isMenuOpen ? close : hum} alt="Hamburger Menu" onClick={handleMenuToggle}/>
                <div className=' left-10 max-md:hidden  z-[-1] absolute w-135  h-0.5 bg-gray-300 opacity-13'></div>
                <ul className = {` flex justify-end  gap-7 py-10 px-25 backdrop-blur-md max-md:bg-white max-md:rounded-xl max-md:w-[320px]  ${isMenuOpen ? 'max-md:grid max-md:absolute max-md:top-10 max-md: right-5' : 'max-md:hidden'}`} >
                  <li className='cursor-pointer  rounded text-[#f5f5f5] max-md:text-black max-md:text-center after-line '><Link to="/" className=' text-xl font-sans font-medium uppercase max-lg:text-[0.9rem]    ' >00 Home</Link></li>
                  <li className='cursor-pointer  rounded text-[#f5f5f5] max-md:text-black max-md:text-center after-line '><Link to="/destination" className=' text-xl font-sans font-medium uppercase max-lg:text-[0.9rem]    ' >01 Destination</Link></li>
                  <li className='cursor-pointer  rounded text-[#f5f5f5] max-md:text-black max-md:text-center after-line '><Link to="/crew" className=' text-xl font-sans font-medium uppercase max-lg:text-[0.9rem]    ' >02 Crew</Link></li>
                  <li className='cursor-pointer  rounded text-[#f5f5f5] max-md:text-black max-md:text-center after-line '><Link to="/technology" className=' text-xl font-sans font-medium uppercase max-lg:text-[0.9rem]    ' >03 Technology</Link></li>
                </ul>
            </nav>
  )
}

export default Nav