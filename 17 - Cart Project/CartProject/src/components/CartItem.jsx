import React from 'react'
import { MdDelete } from 'react-icons/md'
import { removeItem } from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const removeFormCart = () => {
    dispatch(removeItem(item.id));
    toast.error("Item removed from cart!");
  }

  return (
	  <section className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img src={item.image} className="object-cover" />
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h4 className="text-xl text-slate-700 font-semibold">{item.title}</h4>
          <p className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 14).join(" ") + "..."}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div onClick={removeFormCart} className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
              <MdDelete className="text-red-800 group-hover:text-white" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default CartItem