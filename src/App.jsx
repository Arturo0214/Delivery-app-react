import { useState } from 'react'
import {Routes, Route, Navigate, Link} from "react-router-dom";
import './App.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Start from './components/Start';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<h3>Page not found 404</h3>}/> 
    </Routes>
    </>
  )
}

export default App
