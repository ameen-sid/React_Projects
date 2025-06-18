import React from 'react'

import imgOne from '../assets/one.jpg'
import imgTwo from '../assets/two.jpg'
import imgThree from '../assets/three.jpg'
import imgFour from '../assets/four.jpg'

const MainSectionFive = () => {
  return (
    <section className="w-full h-screen my-16 flex flex-col justify-around items-center" id="blog">
        <h4 className="text-lime-500 text-center text-4xl font-semibold">OUR WORKS</h4>
        <hr />
        <div className="w-full h-[60%] flex">
            <img src={imgOne} alt="" className="w-[25%]" />
            <img src={imgTwo} alt="" className="w-[25%]" />
            <img src={imgThree} alt="" className="w-[25%]" />
            <img src={imgFour} alt="" className="w-[25%]" />
        </div>
        <button className="rounded-md text-white bg-slate-900 py-2 px-4">LOAD MORE</button>
    </section>
  )
}

export default MainSectionFive