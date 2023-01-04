import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from '../images/CEST White Logo.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [registered, setRegistered] = useState(true);
  return (
    <div className='bg-[#2C74B3] p-2 text-white'>
        <div className='max-w-[1240px] items-center py-2 mx-auto flex justify-between'>
        <div className='text-3xl font-bold'>
            <img className='w-12' src={logo}></img>
        </div>
        {
            toggle ? 
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='my-1 font-bold text-2xl cursor-pointer md:hidden'/>
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='my-1 font-bold text-2xl cursor-pointer md:hidden'/>
        }
        {/* responsive nav */}
        <ul className={`font-bold fixed bg-[#2C74B3] text-white w-screen left-0 top-0 py-2 text-xl flex-row justify-center items-center duration-500 z-[1] ${toggle ? 'top-[81px]' : 'top-[-100%]'}`}>
            <li className='my-1 text-center'><Link to='/'>Home</Link></li>
            <li className='my-1 text-center'><Link to='/'>About</Link></li>
            <li className='my-1 text-center'><Link to='/profile'>Profile</Link></li> 
            <li className='my-1 text-center'><Link to='/Contest'>Contest</Link></li>
        </ul>
        {/* responsive nav  */}
        <ul className='hidden md:flex font-bold text-white gap-5'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/Contest'>Contest</Link></li>
        </ul>
        <ul className='flex font-bold gap-5'>
            {
                registered ? 
                <li><button onClick={() => setRegistered(!registered)} className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded'><Link to='/logout'>Log out</Link></button></li>
                :
                <>
                <li><button className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded'><Link to='/login'>Login</Link></button></li>
                <li><button className='bg-white text-[#2C74B3] px-2 p-1 shadow-md rounded'><Link to='/signin'>Sign in</Link></button></li>
                </>
            }
        </ul>
        </div>
    </div>
  )
}

export default Navbar