import React from 'react'


const Book = ({title, author, img}) => {

  return (
  <article className='book'>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={()=>alert('button clicked')}>Reference Example</button>
  </article>
  );
}


export default Book;