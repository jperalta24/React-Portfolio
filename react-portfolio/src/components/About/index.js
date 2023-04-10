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
            I am a dynamic software developer with experience in creating and deploying modern web applications. My expertise in software engineering, coupled with my ability to lead teams and create effective solutions, make me a valuable addition to any tech company. My skills include proficiency in front-end and back-end development using JavaScript, React, Node.js, and more.
          </p>
        </div>
      </div>
    </section>
  );
}




export default AboutMe;