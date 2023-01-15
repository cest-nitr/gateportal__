import React from 'react'
const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-1  h-screen w-full">
        <div className='bg-[#205295] flex flex-col justify-center'>
          <form action="/" className='max-w-[400px] w-full mx-auto p-8 rounded-lg px-8 bg-white text-[#205295]'>
            <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
            <div className='flex flex-col py-2 font-semibold'>
              <label htmlFor="name">User Name</label>
              <input type="text" className='rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none'/>
            </div>
            <div className='flex flex-col py-2 font-semibold'>
              <label htmlFor="password">Password</label>
              <input type="password" className='rounded-lg border border-[#205295] mt-2 p-2 hover:text-white focus:border-blue-500 focus:bg-[#2C74B3] focus:outline-none'/>
            </div>
            <div className='flex justify-between py-2'>
              <p className='flex items-center'><input type="checkbox" className='mr-2'/>Remember me</p>
              <p>Forgot Password </p>
            </div>
            <button className='w-full my-5 py-2 bg-[#205295] text-white font-semibold rounded-lg shadow-lg hover:shadow-sm'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
