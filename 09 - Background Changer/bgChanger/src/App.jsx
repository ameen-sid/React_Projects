import React from 'react'
import { useState } from 'react'

const App = () => {

	const [color, setColor] = useState("pink")
	const data = ['red', 'blue', 'yellow', 'white', 'black']

  return (
    <main className='w-screen h-screen flex flex-col' style={{backgroundColor: color}}>
		<section className='border border-black h-[80%]'></section>
		<section className='border border-blue-700 h-[20%] flex justify-center items-center'>
			<div className='flex gap-4'>
				{
					data.map( (currElem) => {
						return (
							<button 
								className='px-4 py-1 font-bold' 
								onClick={() => setColor(currElem)} 
								style={{backgroundColor:currElem}}>{currElem}</button>
						)
					})
				}
			</div>
		</section>
    </main>
  )
}

export default App