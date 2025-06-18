import React from 'react'

const Post = ({ title, author, category, date, content, tags=[] }) => {
  return (
	<section className='my-8 flex flex-col justify-between gap-4'>
		<div>
			<h4 className='font-bold text-[18px]'>{title}</h4>
			<p className='font-[400] text-[14px]'>By <span className='italic'>{author}</span> on <span className='font-bold underline'>{category}</span></p>
			<p className='text-[14px]'>Posted on {date}</p>
		</div>

		<div>
			<p className='text-[16px]'>{content}</p>
			{
				tags.map( (tag) => (
					<span className='text-[12px] underline text-["Inter"] m-2 font-semibold text-[#1d4ed8]'>{`#${tag}`}</span>
				))
			}
		</div>
	</section>
  )
}

export default Post