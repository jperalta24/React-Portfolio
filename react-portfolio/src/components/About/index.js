import React from 'react';
import ProfileImg from '../../Images/Profile-Pic.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container>
    <section id='aboutMe' className='my-5'>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <Image src={ProfileImg} alt='Profile' roundedCircle fluid style={{maxWidth:'200px'}}/>
        </Col>
        <Col xs={12} md={6}>
          <h1 className='mb-4' id='aboutH1'>About Me</h1>
          <p className='lead'>
          Motivated full-stack developer with proficiency in HTML, CSS, JavaScript, and comprehensive project management skills. Recently completed a rigorous coding bootcamp at the University of Washington, mastering both front-end and back-end development through JavaScript. Known for strong problem-solving skills and adaptability, I've successfully led development projects and fostered seamless teamwork. Now seeking a Junior Web Developer position to leverage my technical skills and fervor for web development, aspiring to grow into a senior developer role in the future.  
          </p>
        </Col>
      </Row>
    </section>
    </Container>
  );
}

export default AboutMe;
