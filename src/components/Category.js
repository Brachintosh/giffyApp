import React from 'react';
import {Link} from 'wouter';
import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles.js";
import './Category.css';

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem
            key={singleOption}
            index={index}
            type='primary'
          >
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}

// const Category = ({ name, options = [] }) => {
//   return (
//     <div className='Category'>
//       <h3 className='Category-title'>{name}</h3>

//       <ul>
//         {
//           options?.map((singleOption) => (
//             <li key={singleOption} >
//               <Link className='Category-link' to={`/search/${singleOption}`} >
//               </Link>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default Category;
