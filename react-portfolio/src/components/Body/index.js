import React from 'react';
import AboutMe from '../AboutMe/'
import Portfolio from '../Portfolio/'
import Contact from '../Contact/'

function Body({ currentPage }) {
    //when page initializes it load aboutme as default
    const renderPage = () => {
        if (currentPage === 'AboutMe' || currentPage === '') {
            return <AboutMe />;
        }
    }
    return (
        <>
            {renderPage()}
        </>
    )
}

export default Body;