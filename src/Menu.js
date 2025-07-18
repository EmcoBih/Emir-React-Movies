// const Menu = ({ items }) => {
//   // console.log(items);
//   return (
//     <div className='section-center'>
//       {items.map(menuItem => {
//         const { id, title, img, desc, price } = menuItem;
//         return (
//           <article key={id} className='menu-item'>
//             <img src={img} alt={title} className='photo' />
//             <div className='item-info'>
//               <header>
//                 <h4>{title}</h4>
//                 <h4 className='price'>${price}</h4>
//               </header>
//               <p className='item-text'>{desc}</p>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Menu;

// EMIR:

const Menu = ({ Movies }) => {
  return (
    <div className='section-center'>
      {Movies.map(movie => {
        const { id, title, img, desc, rate } = movie;
        return (
          <main key={id}>
            <p className='filter-btn myClass'>{id}</p>

            <article className='menu-item'>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{rate}/10</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          </main>
        );
      })}
    </div>
  );
};

export default Menu;
