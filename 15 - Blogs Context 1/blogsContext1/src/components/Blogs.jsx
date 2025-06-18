import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner, Post } from '../components'

const Blogs = () => {

	const {loading, posts} = useContext(AppContext);
	console.log(posts)

  return (
	<section className='w-[50vw] m-auto p-8 py-16 relative'>
		{
			loading ? (<Spinner />) : (posts.map( (post) => (<Post key={post.id} title={post.title} author={post.author} category={post.category} date={post.date} content={post.content} tags={post.tags} />)))
		}
	</section>
  )
}

export default Blogs