import React, { useState } from 'react';
import Header from '../Header/index'
import Body from '../Body/index'

//parent for components
function ContentContainer() {
    const [displayPage, setDisplayPage] = useState(''); //initialize state with empty string

    const handleNavClick = (navItem) => {
      setDisplayPage(navItem);
    };

    return (
        <>
            <Header currentPage={displayPage} pageChange= {handleNavClick} />
            <Body currentPage={displayPage}/>
        </>
    )

}

export default ContentContainer
