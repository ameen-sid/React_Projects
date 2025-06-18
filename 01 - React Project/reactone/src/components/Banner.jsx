import React from 'react'

import '../styles/Banner.css'

const Banner = () => {
  return (
    <section className="w-full h-[80vh] max-[800px]:h-[130vh] text-white bg-cover banner_pic">
        <div className="w-full h-full flex banner_div max-[800px]:flex-col max-[800px]:items-center">
            <div className="w-[70vw] h-full p-44 max-[800px]:p-28">
                <div className="flex">
                    <span className="text-xl">We Are</span>
                </div>
                <div className="my-4">
                    <span className="font-semibold text-7xl">GET</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="font-semibold text-lime-500 text-7xl">INSURED</span>
                </div>
                <p>Nobody's more committed to connecting with you with the exceptional top talents with the right fit</p>
                <p>for your bussiness than us. More committed to connecting you with.</p>
            </div>

            <div className="w-[30vw] p-12 max-[800px]:w-[90vw] max-[800px]:p-2">
                <form className="w-full h-full p-6 bg-blue-950">
                    <legend className="text-center font-semibold text-4xl">GET A QUOTE</legend>
                    <br /><br />                    
                    <label>Your name <sup>*</sup></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="rounded-md h-[30px]" />
                    <br className='max-[800px]:hidden' /><br className='max-[800px]:hidden' />
                    <label className='max-[800px]:px-8'>Mobile <sup>*</sup></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="rounded-md h-[30px]" />
                    <br /><br />
                    <label>Email <sup>*</sup></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" className="rounded-md h-[30px]" />
                    <br className='max-[800px]:hidden' /><br className='max-[800px]:hidden' />
                    <label className='max-[800px]:px-8'>City</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="rounded-md h-[30px]" />
                    <br /><br />
                    <label>Zip code</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" className="rounded-md h-[30px]" />
                    <br /><br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" value="GET QUOTE" className="border border-lime-500 p-[6px] rounded-md bg-lime-500 cursor-pointer" />
               </form>
            </div>
        </div>
    </section>
  )
}

export default Banner   