import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer fixed-bottom">
          
            <div class="text-left"  style={{ marginLeft: '60px', marginBottom: '60px' }}>
              <a href="https://github.com/jperalta24">
                <i className='icons' style={{ color: '#5B8EAC' }}>
                  <FaGithub size={45}/>
                </i>
              </a>
              <a href="https://www.linkedin.com/in/jonathan-peralta-101430260/">
                <i className="icons">
                  <FaLinkedin size={45}/>
                </i>
              </a>
            </div>
         
    </footer>
  );
}

export default Footer;

