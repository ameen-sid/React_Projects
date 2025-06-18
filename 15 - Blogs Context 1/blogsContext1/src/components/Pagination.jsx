import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {currentPage, totalPages, clickHandler} = useContext(AppContext);

  return (
    <footer className='w-full bg-white fixed bottom-0 border border-gray-500'>
      <section className='w-[50%] m-auto flex justify-between p-4'>
        <div className='flex gap-2'>
          {
            currentPage > 1 && <button onClick={() => clickHandler(currentPage - 1)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Previous</button>
          }
          {
            currentPage < totalPages && <button onClick={() => clickHandler(currentPage + 1)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Next</button>
          }
        </div>

        <div>
          <p className='font-bold'>Page {currentPage} of {totalPages}</p>
        </div>
      </section>
    </footer>
  )
}

export default Pagination