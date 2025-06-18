import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const App = () => {

	const [length, setLength] = useState(8);
	const [isNumber, setIsNumber] = useState(false);
	const [isChar, setIsChar] = useState(false);

	const [password, setPassword] = useState("");

	// console.log(length)
	// console.log(isNumber)
	// console.log(isChar)

	const generatePassword = () => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

		if(isNumber)	str += "0123456789"
		if(isChar)	str += "~!@#$%^&*(){}[]"

		for(let i=1; i<=length; i++) {
			let ch = str[Math.floor(Math.random() * str.length)]
			pass += ch;
		}

		// console.log(pass)
		setPassword(pass);
	}

	useEffect(() => {
	  generatePassword();
	}, [length, isNumber, isChar])

	const copyPassword = () => {
		window.navigator.clipboard.writeText(password);
		toast.success("Copied!");
	}
	

  return (
	<main className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
		<section className='border-2 w-[800px] h-[400px] p-4 flex flex-col items-center justify-between'>
			<h2 className='text-3xl font-bold text-yellow-500'>Password Generator</h2>

			<div className='border w-[90%]'>
				<input 
					readOnly
					type="text" 
					name="password" 
					className='w-[80%] text-2xl p-4'
					value={password}
					// onChange={}
				/>
				<button className='bg-blue-600 text-white text-center w-[20%] h-full text-2xl font-semibold' onClick={copyPassword}>Copy</button>
			</div>

			<div className='border w-[90%] flex justify-evenly'>
				<div>
					<input 
						type="range" 
						min={8}
						max={16}
						name="length"  
						id='range'
						value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
					<label htmlFor="range" className='text-xl text-white'>Length {length}</label>
				</div>

				<div>
					<input 
						type="checkbox" 
						name="isNumber" 
						id="number" 
						checked={isNumber}
						onChange={(e) => setIsNumber((prev) => !prev)}
					/>
					<label htmlFor="number" className='text-xl text-white'>Number</label>
				</div>

				<div>
					<input 
						type="checkbox" 
						name="isChar" 
						id="specialCharacters" 
						checked={isChar}
						onChange={(e) => setIsChar((prev) => !prev)}
					/>
					<label htmlFor="specialCharacters" className='text-xl text-white'>Characters</label>
				</div>
			</div>
		</section>
	</main>
  )
}

export default App