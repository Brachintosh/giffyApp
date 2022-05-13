import React from 'react';
import {Link} from 'wouter';

import './Category.css';

const Category = ({ name, options = [] }) => {
  return (
    <div className='Category'>
      <h3 className='Category-title'>{name}</h3>

      <ul>
        {
          options?.map((singleOption) => (
            <li key={singleOption} >
              <Link className='Category-link' to={`/search/${singleOption}`} >
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Category;
