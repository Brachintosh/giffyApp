import React, { useEffect, useState } from 'react'
import Gifs from './Gifs'
import getGifs from '../services/getGifs';

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  // console.log('keyword :>> ', keyword);
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    console.log('Efecto ejecutado!');
    getGifs({ keyword })
      .then(gifs => setGifs(gifs));
    // console.log('gifs :>> ', gifs);
  }, [keyword]);

  return (
    <div >
      {
          gifs?.map(({ id, title, url }) =>{
            return <Gifs
                       title={title}
                       id={id}
                       url={url}
                       key={url}
                    />
            }
          )
        }
    </div>
  )
}

export default ListOfGifs;