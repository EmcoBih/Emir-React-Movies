// import React from 'react';

// const Categories = ({ categories, filterItems }) => {
//   console.log(categories);
//   // console.log(categories);

//   return (
//     <div className='btn-container'>
//       {categories.map((category, index) => {
//         return (
//           <button
//             type='button'
//             className='filter-btn'
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Categories;

//EMIR

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
