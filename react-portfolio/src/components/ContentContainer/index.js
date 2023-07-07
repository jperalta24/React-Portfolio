import React, { useState } from 'react';
import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'
import { Container } from 'react-bootstrap';

//parent for components
function ContentContainer() {
    const [displayPage, setDisplayPage] = useState('AboutMe'); //initialize state with empty string

    const handleNavClick = (navItem) => {
      setDisplayPage(navItem);
    };

    return (
        <Container fluid style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header currentPage={displayPage} pageChange={handleNavClick} />
            {/* flexgrow allows the component to take up as much vertical space as possible */}
            <Container fluid style={{flexGrow: 1}}>
                <Body currentPage={displayPage}/>
            </Container>
            <Footer />
        </Container>
    );

}

export default ContentContainer;

