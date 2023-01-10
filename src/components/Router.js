import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import LeaderBoard from './LeaderBoard'
import Contact from './Contact'
import Login from './Login'
import Signup from './Signup'
import Contest from './Contest'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/profile' element={<Profile/>} exact></Route>
        <Route path='/leaderboard' element={<LeaderBoard/>} exact></Route>
        <Route path='/contest' element={<Contest/>} exact></Route>
        <Route path='/contact' element={<Contact/>} exact></Route>
        <Route path='/login' element={<Login/>} exact></Route>
        <Route path='/signup' element={<Signup/>} exact></Route>
    </Routes>
  )
}

export default Router
