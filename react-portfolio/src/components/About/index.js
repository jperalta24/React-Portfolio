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
          Dynamic project engineer with 5 years of experience in the construction industry,
                    skilled in project planning, resource management, and team leadership. Possess strong
                    problem-solving skills and the ability to adapt to changing circumstances. Recently completed a
                    coding bootcamp at the University of Washington, gaining proficiency in JavaScript for front-end and
                    back-end development. Seeking a junior web developer position to utilize technical skills and
                    passion for software development.
          </p>
        </div>
      </div>
    </section>
  );
}




export default AboutMe;