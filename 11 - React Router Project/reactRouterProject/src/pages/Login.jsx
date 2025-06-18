import React from 'react'
import Template from '../components/Template'
import image from '../assets/loginImage.png'

const Login = ({ setIsLoggedIn }) => (
  <section className='h-[90vh]'>
    <Template 
      heading="Welcome Back" 
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={image}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  </section>
)

export default Login