import React from 'react';
import AboutMe from '../About'
import Portfolio from '../Portfolio';
// import Portfolio from '../Portfolio/'
// import Contact from '../Contact/'

function Body({ currentPage }) {
    //when page initializes it load aboutme as default
    const renderPage = () => {
        if (currentPage === 'AboutMe' || currentPage === '') {
            return <AboutMe />;
        } if (currentPage === 'Portfolio' || currentPage === '') {
            return <Portfolio />;
        }
    }
    return (
        <div className='d-flex flex-column min-vh-100'>
            {renderPage()}
        </div>
    )
}

export default Body;