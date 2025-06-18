import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className='w-full h-full bg-[#000814] text-white'>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path='/signup' element={ <SignUp setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </main>
  )
}

export default App