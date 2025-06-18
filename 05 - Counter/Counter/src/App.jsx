import React from 'react'
import { useState } from 'react'

const App = () => {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <main className='w-full h-screen text-white bg-purple-950 flex flex-col items-center justify-center'>
      <h2 className='text-6xl font-bold m-4'>Counter</h2>
      <div className='w-[30%] h-[10vh] bg-black flex items-center justify-around border'>
        <button className='border rounded text-6xl' onClick={ () => decrement() }>-</button>
        <span className='text-4xl'>{value}</span>
        <button className='border rounded text-6xl' onClick={ () => increment() }>+</button>
      </div>
      <button className='m-4 py-1 px-6 rounded border hover:font-bold' onClick={ () => reset() }>Reset</button>
    </main>
  )
}

export default App