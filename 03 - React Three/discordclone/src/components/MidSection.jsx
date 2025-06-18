import React from 'react'

const MidSection = (props) => {

  const pr = (props.alignment == 1) ? "flex-row-reverse" : "flex-row"
  const style = "flex justify-center items-center w-full m-auto h-[90vh] " + pr
  // console.log(style)

  return (
    <section className={props.color}>
        <div className={style}>
          <img src={props.image} alt="Image" className='m-auto' />
          <div className='w-[40vw] m-auto p-24'>
              <h2 className='text-5xl font-bold py-4 leading-[60px]'>{props.heading}</h2>
              <p className='text-lg leading-[32px]'>{props.description}</p>
          </div>
        </div>
    </section>
  )
}

export default MidSection