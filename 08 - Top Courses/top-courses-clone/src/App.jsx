import React, { useEffect, useState } from 'react'
import { filterData, apiUrl } from './data/data'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Cards from './components/Cards'
import { toast } from 'react-toastify'

const App = () => {

  const [courses, setCourses] = useState({});
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log(output.data);
      setCourses(output.data);
    } catch(error) {
      toast.error("Error to fetching courses");
    }
  }

  useEffect( () => {
    fetchData();
  }, []);
  
  const [category, setCategory] = useState(filterData[0].title);
  const filterCourses = (title) => {
    setCategory(title);
  }

  const getCourses = () => {
    let allCourses = [];
    if(category === "All") {
      Object.values(courses).forEach( (categories) => {
        categories.forEach( (course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else {
      return courses[category];
    }
  }
  
  
  // console.log(courses)

  return (
    <section className='min-h-screen bg-[#4a4e69]'>
      <Navbar />
      <Filters filterData={filterData} filterCourses={filterCourses} category={category} />
      <Cards getCourses={getCourses} />
    </section>
  )
}

export default App