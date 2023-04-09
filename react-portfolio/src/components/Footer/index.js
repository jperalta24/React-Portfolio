import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <a href="https://github.com/yourusername">
              <i className='icons'>
                <FaGithub size={45}/>
                </i>
            </a>
            <a href="https://www.linkedin.com/in/yourusername">
              <i className="icons">
                <FaLinkedin size={45}/>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

