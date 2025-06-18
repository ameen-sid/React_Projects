import React from 'react'
import Navbar from './Navbar.jsx'
import laptopPic from '../assets/downlaodHeaderLaptop.svg'


const DownloadHeader = () => {
  return (
    <header className='w-screen bg-[#23272A] h-[85vh] text-white flex flex-col jutify-between'>
      <Navbar color="bg-[#23272A]" />

      <section className='flex justify-between items-center h-[60vh] w-[90vw] m-auto'>
        <div className='py-6 px-14 w-[50%] h-full flex items-center flex-col justify-evenly'>
        	<h1 className='w-full px-16 font-bold text-6xl h-[60%]'>GET DISCORD FOR ANY DEVICE</h1>
            <p className='text-xl h-[25%] px-14'>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
            <div className='flex items-center justify-between w-[30vw]'>
				<button className='bg-[#5865f2] text-white text-xl font-medium py-[12px] px-[24px] rounded-3xl hover:font-bold'>Download for Windows</button>
				<p>Windows 7 or higher</p>
            </div>
        </div>
		<div className='w-[50%] h-full flex justify-center items-center'>
			<img src={laptopPic} alt="Laptop" className='w-[40vw]' />
		</div>
      </section>
    </header>
  )
}

export default DownloadHeader