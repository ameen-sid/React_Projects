import React from 'react'
import { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  })

  const changeHandler = (event) => {
    const {name, type, checked, value} = event.target;

    setFormData( (prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const submitHandler = (event) => {

    event.preventDefault();

    console.log(formData)
  }

  return (
    <main>
      <form className='w-[50vw] m-auto border-2 border-black flex flex-col gap-4 justify-center items-center' onSubmit={submitHandler}>
        
        <div>
          <label htmlFor="first-name">First Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text" 
            name="firstName" 
            id="first-name" 
            placeholder='Enter your first name'
            className='border'
            onChange={changeHandler}
            value={formData.firstName}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            name='lastName'
            id='last-name'
            placeholder='Enter your last name'
            className='border'
            onChange={changeHandler}
            value={formData.lastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='email'
            name='emailAddress'
            id='email'
            placeholder='Enter your email address'
            className='border'
            onChange={changeHandler}
            value={formData.emailAddress}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <select name="country" id="country" value={formData.country} onChange={changeHandler}>
            <option value="none">--Select--</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <div>
          <label htmlFor="street">Street Address</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            name='streetAddress'
            id='street'
            placeholder='Enter your street address'
            className='border'
            onChange={changeHandler}
            value={formData.streetAddress}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            name='city'
            id='city'
            placeholder='Enter your city'
            className='border'
            onChange={changeHandler}
            value={formData.city}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            name='state'
            id='state'
            placeholder='Enter your state'
            className='border'
            onChange={changeHandler}
            value={formData.state}
          />
        </div><div>
          <label htmlFor="email">Pincode</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            name='pincode'
            id='pincode'
            placeholder='Enter your pincode'
            className='border'
            onChange={changeHandler}
            value={formData.pincode}
          />
        </div>
        <label htmlFor="">By Email</label>
        <div>
          <input 
            type="checkbox" 
            name="comments" 
            id="comments" 
            onChange={changeHandler}
            checked={formData.comments}
          />
          <label htmlFor="comments">Comments</label>
          <br />
          <input 
            type="checkbox" 
            name="candidates" 
            id="candidates" 
            onChange={changeHandler}
            checked={formData.candidates}
          />
          <label htmlFor="candidates">Candidates</label>
          <br />
          <input 
            type="checkbox" 
            name='offers'
            id='offers'
            onChange={changeHandler}
            checked={formData.offers}
          />
          <label htmlFor="offers">Offers</label>
        </div>
        <label htmlFor="">Push Notifications</label>
        <div>
          <input 
            type="radio" 
            name="pushNotifications" 
            id="everything" 
            onChange={changeHandler}
            value={"Everything"}
          />
          <label htmlFor="everything">Everything</label>
          <input 
            type="radio"
            name='pushNotifications'
            id='same-as-email'
            onChange={changeHandler}
            value={"Same as email"}
          />
          <label htmlFor="same-as-email">Same as email</label>
          <input
            type='radio'
            name='pushNotifications'
            id='no-push-notifications'
            onChange={changeHandler}
            value={"No Push Notifications"}
          />
          <label htmlFor="no-push-notifications">No Push Notifications</label>
        </div>
        <button>Submit</button>
      </form>
    </main>
  )
}

export default App