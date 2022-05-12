import React from 'react';
import './ListStyle.css'

const Gifs = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className='gif-list' key={id}>
        <p>{title}</p>
        <span>
            {/* <small>ID:{" "}{id}</small> */}
        </span>
        <img className='gif-list-img' src={url} key={id} alt={title} />
    </a>
  )
};

export default Gifs;
