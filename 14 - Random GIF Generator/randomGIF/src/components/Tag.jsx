import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const Tag = () => {

	const [tag, setTag] = useState('car');
	
	const {gif, loading, fetch} = useGif(tag);

	const clickHandler = () => {
		fetch();
	}

  return (
	<section className='p-8 border-2 border-black rounded-2xl flex flex-col justify-around items-center gap-4'>
		<h3 className='text-xl underline font-bold'>A RANDOM GIF</h3>

		{
			loading ? <Spinner /> : <img src={gif} alt='' />
		}

		<input
			type='text'
			onChange={(e) => setTag(e.target.value)}
			value={tag}
			className='border-2 border-black px-40 py-2 rounded-xl'
		/>

		<button onClick={clickHandler} className='border-2 border-black px-64 py-2 rounded-xl bg-white opacity-50'>GENERATE</button>
	</section>
  )
}

export default Tag