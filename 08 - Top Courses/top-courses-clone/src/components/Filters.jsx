import React from 'react'

const Filters = ({ filterData, filterCourses, category }) => {
  return (
    <section className='bg-[#4a4e69] p-4 flex flex-wrap gap-4 justify-center'>
        {filterData.map( (currElem) => {
            return (
                <button key={currElem.id} onClick={ () => filterCourses(currElem.title) } className={`bg-[#22223b] bg-opacity-60 hover:bg-[#22223b] px-3 py-1 text-white font-semibold text-lg ${category === currElem.title ? "bg-opacity-60 border-white border-2 " : "bg-opacity-40 border-transparent" } rounded-lg`}>{currElem.title}</button>
            )
        })}
    </section>
  )
}

export default Filters