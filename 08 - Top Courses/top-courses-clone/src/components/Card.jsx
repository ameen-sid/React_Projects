import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ data }) => {

  const [likeIcon, setLikeIcon] = useState(<FcLikePlaceholder />);
  const [likeCourses, setLikeCourses] = useState([]);

  const clickHandler = (id) => {
    if(likeCourses.includes(id)) {
      setLikeIcon(<FcLikePlaceholder />);
      setLikeCourses( likeCourses.filter( (cid) => cid !== id) )
      toast.warn("Like Removed");
    }
    else {
      setLikeIcon(<FcLike />);
      if(likeCourses.length == 0) {
        setLikeCourses([id]);
      }
      else {
        setLikeCourses( (prev) => [...prev, id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <section className='w-[300px] rounded-lg bg-[#22223b] relative text-white my-2'>
        <img src={data.image.url} alt={data.image.alt} className=' rounded-lg' />
        <div className='text-3xl absolute top-[45%] left-[85%] overflow-hidden'>
            <button onClick={ () => clickHandler(data.id) } className='bg-white rounded-full p-1'>{likeIcon}</button>
        </div>
        <div className='p-4 flex flex-col gap-2'>
            <h4 className='text-lg font-semibold'>{data.title}</h4>
            <p>{ data.description.length > 100 ? (data.description.slice(0, 100)) + "..." : (data.description) }</p>
        </div>
    </section>
  )
}

export default Card