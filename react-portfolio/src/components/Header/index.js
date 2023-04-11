import React from 'react';
import Navigation from '../Navigation';



const Header = ({ currentPage, pageChange, activeSection}) => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-dark py-4 px-4 fixed-top">
      <h1 className='mb-0' id='headerH1'> Jonathan Peralta</h1>
      <div className="ml-auto">
        <Navigation activeSection={activeSection} onClick={pageChange} />
      </div>
    </header>
  );
};


export default Header;