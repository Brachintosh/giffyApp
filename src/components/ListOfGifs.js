import React from 'react';
import Gifs from './Gifs';
import './ListOfGifs.css';

export default function ListOfGifs({ gifs }) {

  return (
    <div className='ListOfGifs'>
      {
          gifs?.map(({ id, title, url }) =>
            <Gifs
                title={title}
                id={id}
                url={url}
                key={url}
            />
          )
        }
    </div>
  )
};