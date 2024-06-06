import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({post}) {
  return (
    <div className='group relative w-full h-[330px] hover:border
    border-teal-400 overflow-hidden sm:w-[350px] rounded-md'>
       <Link to={`/post/${post.slug}`}>
          <img src={post.image} alt='post-cover' 
          className='h-[260px] w-full object-cover group-hover:h-[200px]
          transition-all duration-300 z-20' />
       </Link>
       <div className=' p-3 flex flex-col gap-2'>
         <p className='font-semibold text-lg line-clamp-2'>{post.title}</p>
         <span className='italic text-sm'>{post.category}</span>
         <Link to={`/post/${post.slug}`} 
         className='z-10 group-hover:bottom-0 absolute bottom-[-200px] 
         left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500
         hover:text-white transition-all duration-300 text-center py-2
         rounded-md !rounded-tl-none !rounded-tr-none m-2'>
            Read Article
         </Link>
       </div>
    </div>
  )
}
