import React, { useContext } from 'react';
import Gif from '../../components/Gifs';
// import StaticContext from '../../context/StaticContext';
import GifsContext from '../../context/GifsContext';


export default function Detail({ params }) {
  // const staticConfig = useContext(StaticContext)
  // console.log('Soy staticConfig :>> ', staticConfig);


  const {gifs} = useContext(GifsContext);
  console.log('Soy gifsContext :>> ', {gifs});

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  console.log('params.id >>> ', params.id);
  console.log('.find(gif) >>> ', gif?.id);

  return (
    <Gif {...gif} />
  )
};