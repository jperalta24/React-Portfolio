import React from 'react';
// import profileImg from './images/';
import { Container, Row, Col, } from 'react-bootstrap';

function AboutMe() {
  return (
    <section id='aboutMe' className='mb-5'>
      <Container>
        <Row>
          <Col md={4}>
            <img src='./images/Profile-Pic.jpg' alt='Profile' fluid />
          </Col>
          <Col md={8}>
            <h1 id='about'>About Me</h1>
            <p>
              Dynamic project engineer with 5 years of experience in the
              construction industry, skilled in project planning, resource
              management, and team leadership. Possess strong problem-solving
              skills and the ability to adapt to changing circumstances.
              Recently completed a coding bootcamp at the University of
              Washington, gaining proficiency in JavaScript for front-end and
              back-end development. Seeking a junior web developer position to
              utilize technical skills and passion for software development.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;