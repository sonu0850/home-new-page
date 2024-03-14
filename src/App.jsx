import React from 'react'

import './App.css'
import Navbar from './Components/Navbar/navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Navbar/Home'


function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    
    </>
  )
}

export default App
