import React, {useState} from 'react';
import Navigation from '../Nav';



const Header = () => {

  const [displayNav, setDisplayNav] = useState(''); //initialize state with empty string

  const handleNavClick = (navItem) => {
    setDisplayNav(navItem);
  };

    return (
      <header>
        {/* Logo or Branding */}
        <Navigation onClick={handleNavClick}/>
        <p>Selected Nav Item: {displayNav}</p> {/* display the selected nav item */}
      </header>
    );
  };
  
  export default Header;