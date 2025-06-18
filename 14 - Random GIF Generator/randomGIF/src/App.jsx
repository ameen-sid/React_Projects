import React from 'react'
import Navbar from './components/Navbar'
import Tag from './components/Tag'

const App = () => {
  return (
    <main className='w-full bg-gray-800 p-8 flex flex-col justify-between items-center gap-8'>
      <Navbar />

      <Tag />
      <Tag />
    </main>
  )
}

export default App