import React from 'react'
import Logo from '../images/CEST White Logo.png'
import Login from './Login'
const Signup = () => {
  return (
    <div className='w-full h-screen p-4 flex justify-center items-center'>
      <div className='flex justify-evenly items-center w-2/3 bg-white p-2 rounded h-2/3'>
      <div className='w-1/4'>
        <img src={Logo} alt="..." />
      </div>
      <div className='mt-1 flex flex-col justify-center items-center'>
        <Login />
      </div>
      </div>
    </div>
  )
}

export default Signup
