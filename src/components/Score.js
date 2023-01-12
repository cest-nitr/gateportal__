import React from 'react'
import {MdDoneAll, MdDone} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'
import {AiOutlineSolution} from 'react-icons/ai'
const Score = () => {
  const right = 70;
  const wrong = 6;
  const attempted = 76;
  return (
    <div className='w-full h-screen p-2 flex flex-col justify-center items-center'>
      <div className='h-1/2 px-2'>
        <div className='rounded-full p-2 bg-white w-[200px] h-[200px] text-[#2C74B3] flex flex-col text-center text-xl justify-center itmes-center'>
          <div className='flex justify-center items-center text-6xl'><MdDoneAll /></div>
          <div>Successfully Submitted</div>
        </div>
      </div>
      <div className='px-2 flex justify-evenly items-center'>
        <div className='rounded mx-2 bg-white w-[200px] h-[200px] flex flex-col justify-center items-center'>
          <div className='text-xl my-2 text-white bg-[#2C74B3] rounded-full text-2xl p-2'><AiOutlineSolution /></div>
          <div className='text-xl my-2 text-[#2C74B3]'>{attempted}</div>
        </div>
       <div className='rounded mx-2 bg-white w-[200px] h-[200px] flex flex-col justify-center items-center'>
        <div className='text-xl my-2 text-white bg-[#2C74B3] rounded-full text-2xl p-2'><MdDone /></div>
        <div className='text-xl my-2 text-[#2C74B3]'>{right}</div>
      </div>
       <div className='rounded mx-2 bg-white w-[200px] h-[200px] flex flex-col justify-center items-center'>
       <div className='text-xl my-2 text-white bg-[#2C74B3] rounded-full text-2xl p-2'><RxCross2 /></div>
        <div className='text-xl my-2 text-[#2C74B3]'>{wrong}</div>
      </div>
      </div>
    </div>
  )
}

export default Score
