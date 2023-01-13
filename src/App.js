import React from 'react'
import './Quiz.css';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import Router from './components/Router';
import Signup from './components/Signup';
const App = () => {
  return (
    <>
    <Navbar />
    {/* <Router /> */}

    <Signup />
    </>
  )
}

export default App;