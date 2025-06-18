import React, { useContext, useEffect } from 'react'
import { Header, Blogs, Pagination } from './components'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchBlogPosts, currentPage} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts(currentPage);
  }, []);

  return (
    <main>
      <Header />

      <Blogs />

      <Pagination />
    </main>
  )
}

export default App