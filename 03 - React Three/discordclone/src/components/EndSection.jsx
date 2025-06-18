import React from 'react'
import end_sec from '../assets/end_sec.svg'

const EndSection = () => {
  return (
    <section className='bg-[#f4f4f4] w-screen h-[175vh] px-12 py-24'>
        <div className='w-[60%] m-auto'>
            <h2 className='text-5xl text-center'>RELIABLE TECH FOR STAYING CLOSE</h2>
            <br />
            <p className='text-xl text-center'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>
        <img src={end_sec} alt="" className='m-auto w-[80vw]' />
        <div className='w-[40vw] m-auto flex flex-col items-center'>
            <h4 className='text-center text-3xl font-bold my-12'>Ready to start your journey?</h4>
            <button className='bg-[#5865f2] text-white text-xl font-medium py-[12px] px-[24px] rounded-3xl hover:font-bold'>Download for Windows</button>
        </div>
    </section>
  )
}

export default EndSection