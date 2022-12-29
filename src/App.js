import React from 'react'
import Navbar from './components/Navbar';
import Router from './components/Router';

const App = () => {
  return (
    <>
    <div className='grid grid-rows-2 gap-y-8'>
      <div className='row-span-2'>
        <Navbar />
      </div>
      <div className='p-6'>
        <Router />
      </div>
    </div>
    </>
  )
}

export default App;