import React from 'react';


// passing the prop to Navigation component
const Navigation = ({ activeSection, onClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${activeSection === 'AboutMe' ? 'active' : ''}`}>
            <a className="nav-link" href="#aboutMe" onClick={() => onClick('AboutMe')}>
              About Me
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Portfolio' ? 'active' : ''}`}>
            <a className="nav-link" href="#portfolio" onClick={() => onClick('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}>
            <a className="nav-link" href="#contact" onClick={() => onClick('Contact')}>
              Contact
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'Resume' ? 'active' : ''}`}>
            <a className="nav-link" href="#resume" onClick={() => onClick('Resume')}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navigation;
