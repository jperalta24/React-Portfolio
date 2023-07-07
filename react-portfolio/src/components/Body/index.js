import React from 'react';
import AboutMe from '../About'
import Portfolio from '../Portfolio';
import Resume from '../Resume/'
import Contact from '../Contact/'
import { Container, Row, Col, Image } from 'react-bootstrap';

function Body({ currentPage }) {
    //when page initializes it load aboutme as default
    const renderPage = () => {
        if (currentPage === '' || currentPage === 'AboutMe') {
            return <AboutMe />;
        } if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } if (currentPage === 'Resume') {
            return <Resume />;
        } if (currentPage === 'Contact') {
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