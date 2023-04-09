import React from 'react';
import Navigation from '../Navigation';



const Header = ({ currentPage, pageChange }) => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-dark py-4 px-4 fixed-top">
      <h1 className='text-white mb-0'> Jonathan Peralta</h1>
      <div className="ml-auto">
        <Navigation onClick={pageChange} />
      </div>
    </header>
  );
};


export default Header;