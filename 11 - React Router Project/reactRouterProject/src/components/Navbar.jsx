import React from 'react'
import image from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const logoutHandler = () => {
        toast.success("Logged Out Successfully");
        setIsLoggedIn(false);
    }

  return (
    <nav className='w-[80vw] h-[10vh] max-[1200px]:w-[98vw] max-[700px]:w-screen m-auto relative p-4 flex justify-between items-center bg-[#000814] text-[#dbddea]'>

        <Link to="/"><img src={image} alt="" className='w-[200px] h-[35px]' /></Link>

        <ul className='w-[13.6vw] max-[1200px]:w-[200px] max-[700px]:hidden flex justify-between'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>

        <ul className='w-[18vw] max-[1200px]:w-[250px] max-[700px]:hidden flex justify-evenly'>
            {   !isLoggedIn &&
                <li>
                    <Link to="/login">
                        <button className="py-2 px-4 text-base rounded-lg border border-gray-200  dark:bg-gray-800  dark:border-gray-600">Log in</button>
                    </Link>
                </li>
            }
            {   !isLoggedIn &&
                <li>
                    <Link to="/signup">
                        <button className="py-2 px-4 text-base rounded-lg border border-gray-200  dark:bg-gray-800  dark:border-gray-600">Sign up</button>
                    </Link>
                </li>
            }
            {   isLoggedIn &&
                <li>
                    <Link to="/">
                        <button className="py-2 px-4 text-base rounded-lg border border-gray-200  dark:bg-gray-800  dark:border-gray-600" onClick={logoutHandler}>Log out</button>
                    </Link>
                </li>
            }
            {   isLoggedIn &&
                <li>
                    <Link to="/dashboard">
                        <button className="py-2 px-4 text-base rounded-lg border border-gray-200  dark:bg-gray-800  dark:border-gray-600">Dashboard</button>
                    </Link>
                </li>
            }
        </ul>

        <div className='w-[20px] min-[700px]:hidden flex flex-col gap-1'>
            <div className='h-[3px] w-full bg-gray-400'></div>
            <div className='h-[3px] w-full bg-gray-400'></div>
            <div className='h-[3px] w-full bg-gray-400'></div>
        </div>

    </nav>
  )
}

export default Navbar