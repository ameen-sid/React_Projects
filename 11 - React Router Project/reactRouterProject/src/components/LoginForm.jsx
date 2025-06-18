import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        emailAddress: "", password: ""
    })
    
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData( (prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [isClick, setIsClick] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(formData);
        setIsLoggedIn(true);
        toast.success("Logged in Successfully");
        navigate("/dashboard");
    }

  return (
    <form className='flex flex-col my-4' onSubmit={submitHandler}>
        <label htmlFor="email-address" className='text-[#daddf0]'>
            Email Address  <sup className='text-red-600'>*</sup>
        </label>
        <input
            required
            type="email" 
            name="emailAddress" 
            id="email-address" 
            placeholder='Enter email address'
            onChange={changeHandler}
            value={formData.emailAddress}
            className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
        />

        <label htmlFor="password" className='text-[#daddf0] mt-2'>
            Password  <sup className='text-red-600'>*</sup>
        </label>
        <input
            required
            type={isClick === false ? "password" : "text"}
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={formData.password}
            className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
        />
        <span className='absolute bottom-[257px] left-[520px] text-gray-400' onClick={() => setIsClick( (prev) => !prev)}>
            {
                isClick === false ? <AiOutlineEye size="25px" /> : <AiOutlineEyeInvisible size="25px" />
            }
        </span>

        <span className='text-[#47a5c5] text-xs relative left-[425px]'>
            <Link to="#">Forgot Password</Link>
        </span>

        <button className='mt-8 px-12 py-2 rounded-md bg-[#ffd60a] text-[#000] font-semibold flex items-center justify-center gap-2'>Sign in</button>
    </form>
  )
}

export default LoginForm