import React from 'react';
import Gif from '../../components/Gifs';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({ params }) {
  // Custom Hook:
  const gifs = useGlobalGifs();

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  // console.log('params.id >>> ', params.id);
  // console.log('.find(gif) >>> ', gif?.id);

  return (
    <Gif {...gif} />
  )
};