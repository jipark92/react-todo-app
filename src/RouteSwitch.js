import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ToDo from './components/ToDo'

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ToDo/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}