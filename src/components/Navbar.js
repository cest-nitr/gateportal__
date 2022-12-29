import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
            <div className='font-bold text-2xl cursor-pointer flex items-center'>
                CEST
            </div>
            <ul className='md:flex md:items-center'>
                <Link className='md:ml-8 text-xl' to='/' >Home</Link>
                <Link className='md:ml-8 text-xl' to='/profile' >Profile</Link>
                <Link className='md:ml-8 text-xl' to='/contact' >Contact</Link>
                <Link className='md:ml-8 text-xl' to='/login' >Login</Link>
                <Link className='md:ml-8 text-xl' to='/signup' >Sign Up</Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
