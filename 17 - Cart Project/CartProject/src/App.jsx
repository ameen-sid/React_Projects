import React from 'react'
import { Navbar } from './components'
import { Home, Cart, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App