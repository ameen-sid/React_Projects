import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from '../components';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const [totalAmount, setTotalAmount] = useState(0);

  const cart = useSelector((state) => state.cart);
  console.log(cart)

  useEffect( () => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
	  <section>
      {
        cart.length < 1
        // false
         ? 
         (<section className='w-full h-[88vh] flex flex-col justify-center items-center'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>Your cart is empty!</p>
            <NavLink to="/">
              <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 px-10 tracking-wider'>SHOP NOW</button>
            </NavLink>
         </section>)
         : 
         (<section className='max-w-6xl mx-auto flex'>
            <div>
              {
                cart.map( (item, i) => {
                  return (
                    <CartItem key={item.id} item={item} />
                  )
                })
              }
            </div>

            <div className='flex flex-col p-5 gap-5 my-14 h-[100%] justify-between'>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-xl text-green-800 '>YOUR CART</p>

                <h4 className='font-semibold text-5xl text-green-700  -mt-5'>SUMMARY</h4>

                <p className='text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</p>
              </div>

              <div className='flex flex-col'>
                <p className='text-gray-700 font-semibold'>Total Amount: <span className='font-bold'>${totalAmount}</span></p>

                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>Chekout Now</button>
              </div>
            </div>
         </section>)
      }
    </section>
  )
}

export default Cart