import React from 'react'

const Login = () => {
  return (
    <div>
     <form action="/" className='p-2 pt-4 flex flex-col justify-center w-10/12'>
     <h1 className='text-center text-xl'>Log in</h1>
                <div className='mt-4'>
                  <label htmlFor="name">User name</label>
                  <input type="text" id='name' required className='w-full border border-[#205295] px-2 py-2 rounded-lg shadow-sm' />
                </div>
                <div className='mt-4'>
                  <label htmlFor="email">Email address</label>
                  <input type="email" id='email' required className='w-full border border-[#205295] px-2 py-2 rounded-lg shadow-sm' />
                </div>
                <div className='mt-4'>
                  <label htmlFor="password">Email address</label>
                  <input type="password" id='password' required className='w-full border border-[#205295] px-2 py-2 rounded-lg shadow-sm' />
                </div>

                <button type='submit' className='bg-[#205295] rounded p-2 w-1/4 mt-4 text-white text-center text-sm'>Register</button>
              </form>
    </div>
  )
}

export default Login
