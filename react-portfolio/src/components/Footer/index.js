import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="footer mt-auto">
            <Row>
                <Col xs={12} className="text-left py-3" style={{ marginBottom: '60px' }}>
                    <a href="https://github.com/jperalta24" style={{ marginRight: '15px' }}>
                        <FaGithub className='icons' size={45} style={{ color: '#5B8EAC' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-peralta-101430260/">
                        <FaLinkedin className='icons' size={45} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;


