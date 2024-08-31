import Link from 'next/link'
import React from 'react'

function CardBlog
(title,body) {
    // const handleLike=()=>{

    // }
  return (
    <div>
      <h6>{title}</h6>
      <p>{body}</p>
      <div><button><Link href="/post">like</Link></button></div>
    </div>
  )
}

export default CardBlog

