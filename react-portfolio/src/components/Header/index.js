import React from 'react';
import Navigation from '../Navigation';



const Header = ({ currentPage, pageChange }) => {
  return (
    <header>
      <h1 className='bg-dark text-white mb-3'> Jonathan Peralta</h1>
      <Navigation onClick={pageChange} />
      <p>Selected Nav Item: {currentPage}</p> {/* display the selected nav item */}
    </header>
  );
};

export default Header;