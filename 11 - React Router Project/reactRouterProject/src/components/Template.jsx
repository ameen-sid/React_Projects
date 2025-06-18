import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Template = ({ heading, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <section className='w-[80vw] m-auto p-10 flex justify-between relative'>

        <article className='flex flex-col gap-2 w-[45%]'>
            <h2 className='text-[30px] leading-9 font-semibold'>{heading}</h2>

            <div>
                <p className='text-[18px] text-[#a8aab6]'>{desc1}</p>
                <p className='text-[18px] text-[#47a5c5] italic my-[-5px]'>{desc2}</p>
            </div>

            { formtype === "login" ? <LoginForm setIsLoggedIn={setIsLoggedIn} /> : <SignUpForm setIsLoggedIn={setIsLoggedIn} /> }

            <div className='my-2 flex items-center justify-between'>
                <div className='h-[1px] bg-gray-700 w-[45%]'></div>
                <span className='text-gray-700'>OR</span>
                <div className='h-[1px] bg-gray-700 w-[45%]'></div>
            </div>

            <button className='px-12 py-2 rounded-md border border-gray-700 flex items-center justify-center gap-2'>
                <FcGoogle size="23px" />
                Sign in with Google
            </button>
        </article>
        
        <article>
            <img src={frame} alt="" className='w-[400px] mt-6'/>
            <img src={image} alt="" className='absolute top-12 right-16 w-[400px]' />
        </article>

    </section>
  )
}

export default Template