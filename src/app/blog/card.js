import Link from 'next/link';
import React from 'react';

function CardBlog({ title, body }) {
  return (
    <div>
      <h6>{title}</h6>
      <p>{body}</p>
      <div>
        <Link href="/post">
          <button>Like</button>
        </Link>
      </div>
    </div>
  );
}

export default CardBlog;
