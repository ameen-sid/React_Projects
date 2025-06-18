import React from 'react'
import Card from './Card'

const Cards = ({ getCourses }) => {
  return (
    <main className='bg-[#4a4e69] w-full'>
        <div className='w-[61vw] max-[1200px]:w-[80%] border m-auto flex flex-wrap justify-center gap-4'>
            {
                getCourses().map( (currElem) => {
                    return (
                        <Card key={currElem.id} data={currElem} />
                    )
                })
            }
        </div>
    </main>
  )
}

export default Cards