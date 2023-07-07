import React, { useState } from 'react';
import { validateEmail } from '../../Utils/helpers';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === '' || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      // Handle sending the message
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }
    if (name && email) {
      setFormSubmitted(true);
    }
  };

  return (
    <Container className="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '200px' }}>
      <Row>
        <Col>
          <h2 style={{ marginBottom: '20px' }}>Contact</h2>
          {formSubmitted && <p>Thank you for your message!</p>}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  if (name === '') {
                    setNameError(true);
                  } else {
                    setNameError(false);
                  }
                }}
              />
              {nameError && <p className="error">Please enter your name.</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (email === '' || !validateEmail(email)) {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }}
              />
              {emailError && (
                <p className="error">Please enter a valid email address.</p>
              )}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="message" style={{ marginRight: '10px', verticalAlign: 'top' }}>Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%' }}
              ></textarea>
            </div>
            <button type="submit" style={{ padding: '10px 20px', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Send Message</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
