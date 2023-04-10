import React from 'react';
import AboutMe from '../About'
import Portfolio from '../Portfolio';
import Resume from '../Resume/'
import Contact from '../Contact/'

function Body({ currentPage }) {
    //when page initializes it load aboutme as default
    const renderPage = () => {
        if (currentPage === 'AboutMe' || currentPage === '') {
            return <AboutMe />;
        } if (currentPage === 'Portfolio' || currentPage === '') {
            return <Portfolio />;
        } if (currentPage === 'Resume' || currentPage === '') {
            return <Resume />;
        } if (currentPage === 'Contact' || currentPage === '') {
            return <Contact />;
        }
    }
    return (
        <div className="d-flex flex-column">
  {renderPage()}
</div>

    )
}

export default Body;