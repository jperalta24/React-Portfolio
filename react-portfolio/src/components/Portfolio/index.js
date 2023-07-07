import React from 'react';
import PetFriends from '../../Images/petfriends.png';
import WoWConnect from '../../Images/Project2.png';
import ConstructDaily from '../../Images/ConstructDaily.png';
import { FaGithub } from 'react-icons/fa';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

function Portfolio() {
    return (
        <section className="project-section my-5" id="Portfolio">
            <div className="resume-section-content">
                <h1 className='navTitle'>Portfolio</h1>
                <Container className="port-container">
                    <Row>
                        <Col lg={6} className="mb-4">
                            <Card className="h-100 enlarge-card">
                                <Card.Header className="portfolio-header">
                                    <h5>Tools/Languages: HTML, JavaScript, Third-Party API's, CSS (Bulma)</h5>
                                </Card.Header>
                                <Card.Img variant="top" src={PetFriends} alt="" />
                                <Card.Body>
                                    <Card.Title>PetFriends</Card.Title>
                                    <Card.Text>PetFriends is a user-centric pet adoption application. It leverages Petfinder's API to match prospective pet owners with their ideal companions. Our team developed this platform with a clear objective: to streamline pet adoption, making it easier and more convenient for users.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" href="https://jperalta24.github.io/PetFriends/" target="_blank" rel='noreferrer'>View Project</Button>
                                    <a href="https://github.com/jperalta24/PetFriends" target="_blank" rel='noreferrer'>
                                        <i className='icons'><FaGithub size={45} /></i>
                                    </a>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={6} className="mb-4">
                            <Card className="h-100 enlarge-card">
                                <Card.Header className="portfolio-header">
                                    <h5>Tools/Languages:JavaScript, Node.js, MySQL, Express, Bootstrap</h5>
                                </Card.Header>
                                <Card.Img variant="top" src={WoWConnect} alt="" />
                                <Card.Body>
                                    <Card.Title>WoW-Connect</Card.Title>
                                    <Card.Text>WoW-Connect serves as an engaging platform for World of Warcraft gamers seeking group play. I led the development of this application, ensuring seamless connectivity among players. I was responsible for both front-end and back-end development.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" href="https://obscure-falls-87878.herokuapp.com/" target="_blank" rel='noreferrer'>View Project</Button>
                                    <a href="https://github.com/jperalta24/WoW-Connect" target="_blank" rel='noreferrer'>
                                        <i className='icons'><FaGithub size={45} /></i>
                                    </a>
                                </Card.Footer>
                            </Card>
                            {/* </div> */}
                        </Col>
                        <Col  lg={6} className="mb-4">
                            <Card className="h-100 enlarge-card">
                                <Card.Header className="portfolio-header">
                                    <h5>Tools/Languages:MERN</h5>
                                </Card.Header>
                                <Card.Img variant="top" src={ConstructDaily} alt="" />
                                <Card.Body>
                                    <Card.Title>ConstructDaily</Card.Title>
                                    <Card.Text>ConstructDaily is a construction project management tool designed to help project managers efficiently manage and monitor project progress, resource usage, safety incidents, and communication among team members. It provides a user-friendly interface for creating and updating daily logs for each project, with a wide range of information fields such as work completed, materials used, equipment usage, weather conditions, delays and disruptions, safety incidents, and communication.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" href="https://peaceful-refuge-36049.herokuapp.com/" target="_blank" rel='noreferrer'>View Project</Button>
                                    <a href="https://github.com/jperalta24/ConstructDaily" target="_blank" rel='noreferrer'>
                                        <i className='icons'><FaGithub size={45} /></i>
                                    </a>
                                </Card.Footer>
                            </Card>
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    )
}

export default Portfolio