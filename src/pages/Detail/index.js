import React from 'react'

export default function Detail({ params }) {
    console.log('params.id :>> ', params.id);
  return <h3>Giff con id: {params.id}</h3>
};