import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/removeLogo.png'
import data from './navbar.json'

const Navbar = (props) => {

  const style = "w-40 " + toString(props.color)

  return (
    <nav className={props.color}>
      <div className='w-4/5 mx-auto flex justify-between items-center p-6 text-white font-[inherit]'>
        <Link to="/"><img src={logo} alt="Discord" className={style} /></Link>
          <ul className='flex justify-evenly w-[50%] font-bold'>
              
              {data && data.map((i) => (
                <li className='hover:underline'><Link to={i.to}>{i.value}</Link></li>
              ))}
              
              {/* https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86 */}
              
          </ul>
          <button className='bg-white text-black text-sm font-medium py-[7px] px-[16px] rounded-3xl hover:text-[#5865f2] hover:font-medium'>Open Discord</button>
      </div>
    </nav>
  )
}

export default Navbar