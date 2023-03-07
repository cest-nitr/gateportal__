import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from '../images/CEST White Logo.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [registered, setRegistered] = useState(false);
  return (
    <div className='bg-[#205295] px-2 py-1 text-white w-full shadow-xl'>
        <div className='max-w-[1240px] items-center py-2 mx-auto flex justify-between'>
        <div className='text-3xl font-bold'>
            <img className='w-12' src={logo} alt="logo"></img>
        </div>
        {
            toggle ? 
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='my-1 font-bold text-2xl cursor-pointer md:hidden'/>
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='my-1 font-bold text-2xl cursor-pointer md:hidden'/>
        }
        {/* responsive nav */}
        <ul className={`md:hidden font-regular h-full fixed bg-[#2C74B3] text-white w-screen left-0 top-0 py-2 text-lg flex flex-col gap-y-7 justify-start items-center duration-500 z-[-1] pt-[100px] ${toggle ? 'top-[72px]' : 'top-[-100%]'}`}>
            <li className='text-center'><Link to='/'>Home</Link></li>
            <li className='text-center'><Link to='/profile'>Profile</Link></li> 
            <li className='text-center'><Link to='/Contest'>Contest</Link></li>
        </ul>
        {/* responsive nav  */}
        <ul className='hidden md:flex font-regular gap-5'>
            <li className='text-white hover:text-[#aeaeae]'><Link to='/'>Home</Link></li>
            <li className='text-white hover:text-[#aeaeae]'><Link to='/profile'>Profile</Link></li>
            <li className='text-white hover:text-[#aeaeae]'><Link to='/Contest'>Contest</Link></li>
        </ul>
        <ul className='flex font-bold gap-5'>
            {
                registered ? 
                <li><button onClick={() => setRegistered(!registered)} className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded hover:bg-[#2C74B3] hover:text-white hover:shadow-lg focus:shadow-sm'><Link to='/logout'>Log out</Link></button></li>
                :
                <>
                <li><button className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded hover:bg-[#2C74B3] hover:text-white hover:shadow-lg focus:shadow-sm'><Link to='/login'>Log In</Link></button></li>
                <li><button className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded hover:bg-[#2C74B3] hover:text-white hover:shadow-lg focus:shadow-sm'><Link to='/signin'>Sign Up</Link></button></li>
                </>
            }
        </ul>
        </div>
    </div>
  )
}

export default Navbar