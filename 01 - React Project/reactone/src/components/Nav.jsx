import React from 'react'
import { BiAlignRight } from "react-icons/bi"

const Nav = () => {
  return (
    <nav className="flex justify-around items-center h-[8vh]">
        <div>
            <span className="font-black text-xl">HOME</span>
            &nbsp;
            <span className="font-black text-lime-500 text-xl">INSURANCE</span>
        </div>
        <div className='max-[800px]:hidden'>
            <ul className="flex gap-7 font-semibold">
                <li className="text-lime-500 cursor-pointer hover:font-bold">HOME</li>
                <li className="hover:font-bold cursor-pointer"><a href="#about">ABOUT</a></li>
                <li className="hover:font-bold cursor-pointer"><a href="#services">SERVICES</a></li>
                <li className="hover:font-bold cursor-pointer"><a href="#team">TEAM</a></li>
                <li className="hover:font-bold cursor-pointer"><a href="#blog">BLOG</a></li>
                <li className="hover:font-bold cursor-pointer"><a href="#contact">CONTACT</a></li>
                <li className="hover:font-bold cursor-pointer">ICON</li>
            </ul>
        </div>
        <BiAlignRight className='min-[800px]:hidden text-2xl' />
    </nav>
  )
}

export default Nav