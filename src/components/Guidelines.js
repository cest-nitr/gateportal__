import React from 'react'
import {BsFillSquareFill} from 'react-icons/bs';
const Guidelines = () => {
  const rules = [
    "Rule number 1",
    "Rule number 2",
    "Rule number 3",
    "Rule number 4",
    "Rule number 5",
    "Rule number 6",
    "Rule number 7",
    "Rule number 8",
    "Rule number 9",
    "Rule number 10"
  ];
  return (
    <>
    <div className='w-full bg-[#205295] text-white h-screen p-4 flex justify-center items-center bottom-0'>
      <div className='w-9/12 bg-white h-3/4 rounded text-[#205295] p-2 grid grid-flow-col'>
        <div className="guidelines m-2 p-2 rounded">
          <h1 className='p-1 my-1 text-lg text-center'>Guidelines for the contest</h1>
          <ul className='flex flex-col p-4'>
            {rules.map((rule) => {
              return <li className='my-2 text-l flex items-center'><BsFillSquareFill className='mx-1'/> {rule}</li>
            } )}
          </ul>
        </div>
        <div className="register m-2 p-1 bg-[#205295] rounded flex flex-col justify-center items-center">
          <h1 className='text-center text-white mb-2 text-lg'>Join Contest Now!!</h1>
            <div className='w-3/4 rounded bg-white h-3/4 flex justify-center'>
              <form action="/" className='p-2 pt-4 flex flex-col justify-center w-10/12'>
                
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Guidelines
