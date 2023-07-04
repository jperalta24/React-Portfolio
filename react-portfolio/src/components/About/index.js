import React from 'react';
import ProfileImg from '../../Images/Profile-Pic.jpg';

function AboutMe() {
  return (
    <section id='aboutMe' className='my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center'>
          <img src={ProfileImg} alt='Profile' className='mr-3'  style={{
            width: '450px',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '50%'
          }}  />
        </div>
        <div className='col-md-4'>
          <h1 className='mb-4' id='aboutH1'>About Me</h1>
          <p className='lead'>
          Motivated full-stack developer with proficiency in HTML, CSS, JavaScript, and comprehensive project management skills. Recently completed a rigorous coding bootcamp at the University of Washington, mastering both front-end and back-end development through JavaScript. Known for strong problem-solving skills and adaptability, I've successfully led development projects and fostered seamless teamwork. Now seeking a Junior Web Developer position to leverage my technical skills and fervor for web development, aspiring to grow into a senior developer role in the future.  
          </p>
        </div>
      </div>
    </section>
  );
}




export default AboutMe;