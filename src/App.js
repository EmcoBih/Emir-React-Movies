// import React, { useState } from 'react';
// import Menu from './Menu';
// import Categories from './Categories';
// import items from './data';

// const allCategories = ['all', ...new Set(items.map(item => item.category))];

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);
//   // console.log(menuItems); // Radi !
//   // console.log(categories); // Radi !

//   // OVDE PRAVIMO NAS FILTER :)
//   const filterItems = category => {
//     if (category === 'all') {
//       setMenuItems(items);
//       return;
//     }

//     // OVO PRAVIMO DA FILTRIRA AKO KLIKNEMO NA NPR: 'breakfast' DA IZDVOJI/FITRIRA SAMO 'breakfast' PROIZVODE :D
//     const newItems = items.filter(i => i.category === category);
//     setMenuItems(newItems);
//   };

//   return (
//     <main>
//       {/*SKRACENICA ZA DVE KLASE: sect.menu.section */}
//       <section className='menu section'>
//         <div className='title'>
//           <h2>our menu</h2>
//           <div className='underline'></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;

// EMIR:
import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Movies from './data';
const allCategories = ['all', ...new Set(Movies.map(movie => movie.category))];

function App() {
  const [movies, setMovies] = useState(Movies);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'all') {
      setMovies(Movies);
      return;
    }
    const newMovies = Movies.filter(m => m.category === category);
    setMovies(newMovies);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Movies</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu Movies={movies} />
      </section>
    </main>
  );
}

export default App;
