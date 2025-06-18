import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", emailAddress: "",
        password: "", confirmPassword: ""
    })

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData( (prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [accountType, setAccountType] = useState("student");

    const [isClickOne, setIsClickOne] = useState(false);
    const [isClickTwo, setIsClickTwo] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            toast.error("Password didn't match");
            return ;
        }

        toast.success("Account Created Successfully");

        const data = {
            ...formData,
            accountType: accountType
        }
        console.log(data);

        setIsLoggedIn(true);
        navigate("/dashboard");
    }

  return (
    <>
        <section className="flex bg-[#161d29] p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button className={ (accountType === "student" ? "bg-[#000814] text-white" : "bg-transparent text-gray-500") + " py-2 px-5 rounded-full transition-all duration-200" } onClick={ () => setAccountType("student")}>Student</button>
            <button className={ (accountType === "instructor" ? "bg-[#000814] text-white" : "bg-transparent text-gray-500") + " py-2 px-5 rounded-full transition-all duration-200"} onClick={ () => setAccountType("instructor")}>Instructor</button>
        </section>
            
        <form onSubmit={submitHandler}>
            <section className='flex gap-6'>
                <div>
                    <label htmlFor="first-name" className='text-[#daddf0] mt-2'>
                        First Name  <sup className='text-red-600'>*</sup>
                    </label>
                    <input 
                        required
                        type='text' 
                        name='firstName'
                        id='first-name'
                        placeholder='Enter first name'
                        onChange={changeHandler}
                        value={formData.firstName}
                        className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
                    />
                </div>
                <div>
                    <label htmlFor="last-name" className='text-[#daddf0] mt-2'>
                        Last Name  <sup className='text-red-600'>*</sup>
                    </label>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        id='last-name'
                        placeholder='Enter last name'
                        onChange={changeHandler}
                        value={formData.lastName}
                        className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
                    />
                </div>
            </section>

            <section>
                <label htmlFor="email-address" className='text-[#daddf0] mt-2'>
                    Email Address  <sup className='text-red-600'>*</sup>
                </label>
                <input
                    required
                    type='email'
                    name='emailAddress'
                    id='email-address'
                    placeholder='Enter email address'
                    onChange={changeHandler}
                    value={formData.emailAddress}
                    className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
                />
            </section>

            <section className='flex gap-6'>
                <div>
                    <label htmlFor="create-password" className='text-[#daddf0] mt-2'>
                        Create Password  <sup className='text-red-600'>*</sup>
                    </label>
                    <input
                        required
                        type={ isClickOne ? "text" : "password" }
                        name='password'
                        id='create-password'
                        placeholder='Enter Password'
                        onChange={changeHandler}
                        value={formData.password}
                        className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
                    />
                    <span className='cursor-pointer absolute bottom-[225px] left-[245px] text-gray-400' onClick={() => setIsClickOne( (prev) => !prev)}>
                        {
                            isClickOne ? <AiOutlineEyeInvisible size="25px" /> : <AiOutlineEye size="25px" />
                        }
                    </span>
                </div>
                <div>
                    <label htmlFor="confirm-password" className='text-[#daddf0] mt-2'>
                        Confirm Password  <sup className='text-red-600'>*</sup>
                    </label>
                    <input
                        required
                        type={ isClickTwo ? "text" : "password" }
                        name='confirmPassword'
                        id='confirm-password'
                        placeholder='Confirm Password'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        className='p-[12px] bg-[#161d29] rounded-[0.5rem] text-richblack-5 w-full my-1'
                    />
                    <span className='cursor-pointer absolute bottom-[225px] left-[520px] text-gray-400' onClick={() => setIsClickTwo( (prev) => !prev)}>
                        {
                            isClickTwo ? <AiOutlineEyeInvisible size="25px" /> : <AiOutlineEye size="25px" />
                        }
                    </span>
                </div>
            </section>

            <button className='w-full mt-8 px-12 py-2 rounded-md bg-[#ffd60a] text-[#000] font-semibold flex items-center justify-center gap-2'>Create Account</button>
        </form>
    </>
  )
}

export default SignUpForm