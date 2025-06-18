import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {

	const cart = useSelector((state) => state.cart);
	// console.log(cart)

  return (
	<section className='w-full text-white bg-[#0f172a]'>
		<nav className='max-w-6xl m-auto flex justify-between p-3'>
			<NavLink to="/">
				<img src={logo} alt="Logo" className='w-[180px]' />
			</NavLink>

			<div className='flex justify-center items-center gap-6 px-2'>
				<NavLink to="/">
					<span className='cursor-pointer hover:text-green-400 transition duration-300 ease-in'>Home</span>
				</NavLink>
				<NavLink to="/cart" className="relative">
					<FaShoppingCart size="25px" className='cursor-pointer hover:text-green-400 transition duration-300 ease-in' />
					{ cart.length > 0 && 
						<div className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">{cart.length}</div>
					}
				</NavLink>
			</div>
		</nav>
	</section>
  )
}

export default Navbar