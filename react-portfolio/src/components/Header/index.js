import React from 'react';
import Navigation from '../Navigation';



const Header = ({ currentPage, pageChange }) => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-dark py-3 px-4">
      <h1 className='text-white mb-0'> Jonathan Peralta</h1>
      <Navigation onClick={pageChange} />
      <p className="text-white mb-0">Selected Nav Item: {currentPage}</p> {/* display the selected nav item */}
    </header>
  );
};

export default Header;