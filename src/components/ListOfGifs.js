import React, { useEffect, useState } from 'react'
import Gifs from './Gifs'
import Loader from './Loader';
import getGifs from '../services/getGifs';

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  // console.log('keyword :>> ', keyword);
  const  [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    setLoading(true);
    // console.log('Efecto ejecutado!');
    getGifs({ keyword })
      .then(gifs => {
          setGifs(gifs);
          setTimeout(() => setLoading(false), 2500);
      });
    // console.log('gifs :>> ', gifs);
  }, [keyword]);

  if(loading) return( 
    <div>
      <Loader  className='loader-home' />;
    </div>
  )

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