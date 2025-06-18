import React from 'react'
import { useState } from 'react'

const Card = ( { data, removeCard } ) => {

  const [info, setInfo] = useState(data.info.slice(0, 200) + "....");
  const [value, setValue] = useState("Read More");

  const expand = () => {
    if(value == "Read More") {
      setInfo(data.info);
      setValue("Show Less");
    }
    else {
      setInfo(data.info.slice(0, 200) + "....");
      setValue("Read More");
    }
  }

  return (
    <section className='w-[400px] max-[840px]:w-[500px] max-[550px]:w-[350px] my-4 border rounded-lg shadow-gray-800 shadow-md p-2 flex flex-col items-center gap-4'>
        <img src={data.image} alt="" className='h-[55vh] max-[425px]:h-[40vh] object-cover' />
        <div className='p-2'>
            <p className='text-[22px] text-[#1faa59] font-extrabold'>₹ {data.price}</p>
            <p className='text-[24px] text-black font-bold'>{data.name}</p>
            <p>{info} <button className='text-[#12b0e8]' onClick={ () => expand() }>{value}</button></p>
        </div>
        <button className='text-[18px] text-black bg-[#f3e1e1] hover:text-white hover:bg-[#ff0000] font-semibold rounded-lg border-2 border-[#FF0000] py-2 px-20' onClick={ () => removeCard(data.id) }>Not Interested</button>
    </section>
  )
}

export default Card