import React from 'react';
import { Link } from 'wouter';
import './ListStyle.css';
import './Gif.css';

const Gifs = ({ title, id, url }) => {
  return (
    <div className='Gif'>
      <Link to={`/gif/${id}`} className='Gif-link' >
        <p>{title}</p>
        <img className='gif-list-img' src={url} key={id} alt={title} />
      </Link>
    </div>    
  )
};

export default Gifs;
 
// <a href={`#${id}`} className='gif-list' key={id}>
//     <p>{title}</p>
//     <img className='gif-list-img' src={url} key={id} alt={title} />
// </a>