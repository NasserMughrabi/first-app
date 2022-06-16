import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
}


const Book = () => {
  return (
  <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
  );
}

const Title = () => {
  return (
    <h1>I love You to the Moon and Back</h1>
  );
}

const Author = () => {
  return (
    <h4>John Smilga</h4>
  );
}

const Image = () => {
  return (
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/330px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" alt="" />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);

