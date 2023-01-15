import React from 'react'
import './Quiz.css';
import Navbar from './components/Navbar';
import Router from './components/Router';
const App = () => {
  return (
    <div className='min-h-screen w-full m-0 p-0 flex flex-col'>
    <div className='h-1/5 w-full fixed'>
    <Navbar />
    </div>
    <div className='h-4/5 w-full'>
    <Router />
    </div>
    </div>
  )
}

export default App;