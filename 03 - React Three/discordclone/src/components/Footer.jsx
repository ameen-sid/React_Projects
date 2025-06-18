import React from 'react'
import FootListSection from './FootListSection'
import logo from '../assets/logo.png'
import data from './footerList.json'

const Footer = () => {
  return (
    <footer className=' w-screen h-[80vh] bg-[#23272A] text-white px-40 py-24'>
        <div className='flex justify-between px-12'>
            <div className='p-12'>
                <p>Engligh, USA</p>
                <br />
                <p>Icons</p>
            </div>      
            <div className='flex justify-evenly w-[70%]'>

                {data && data.map((i) => (
                    <FootListSection 
                        heading={i.heading}
                        one={i.one}
                        two={i.two}
                        three={i.three}
                        four={i.four}
                        five={i.five}
                        six={i.six}
                        seven={i.seven}
                        eight={i.eight}
                        nine={i.nine}
                        ten={i.ten}
                    />
                ))}

            </div>
        </div>

        <div className='truncate w-full h-[2px] bg-[#404EED] m-8'></div>

        <div className='flex justify-between'>
            <img src={logo} alt="" className='w-[200px]' />
            <button className='bg-[#5865f2] text-white text-sm font-medium py-[7px] px-[16px] rounded-3xl hover:font-bold'>Open Discord</button>
        </div>
    </footer>
  )
}

export default Footer