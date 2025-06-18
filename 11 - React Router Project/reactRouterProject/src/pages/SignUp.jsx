import React from 'react'
import Template from '../components/Template'
import image from '../assets/signupImage.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <section className='w-full h-full'>
      <Template 
        heading="Join the millions learning to code with StudyNotion for free" 
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={image}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </section>
  )
}

export default SignUp