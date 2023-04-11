import React, { useState } from 'react';
import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'

//parent for components
function ContentContainer() {
    const [displayPage, setDisplayPage] = useState('AboutMe'); //initialize state with empty string

    const handleNavClick = (navItem) => {
      setDisplayPage(navItem);
    };

    return (
        <div className=''>
        <Header currentPage={displayPage} pageChange={handleNavClick} />
        <Body currentPage={displayPage} className=''/>
        <Footer />
      </div>
    );

}

export default ContentContainer
