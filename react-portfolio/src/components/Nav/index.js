import React from 'react';



const Navigation = ({ onClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#aboutMe" onClick={() => onClick('About Me')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => onClick('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => onClick('Contact')}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => onClick('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};



export default Navigation;
