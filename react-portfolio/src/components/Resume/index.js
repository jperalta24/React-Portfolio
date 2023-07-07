import myResume from '../../Assets/Resume.JonathanPeralta.docx';
import { FaFileDownload, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase, FaBootstrap, FaServer } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiGraphql } from 'react-icons/si';
import { Col, Container, Row } from 'react-bootstrap';

function Resume() {
    return (
        <Container className="resume" id='Resume' style={{ marginTop: '150px', marginBottom: '50px', textAlign: 'center' }}>
            <Row>
                <Col xs={12}>
                    <h2 className='h2Resume'>Resume</h2>
                    <p id='resumeD'>Click the icon below to download my resume.</p>
                    <a href={myResume} download>
                        <FaFileDownload className="icons" size="3em" style={{ marginBottom: '20px', }} />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <h3>Front-End Proficiencies</h3>
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li><FaHtml5 className="skill-icon" /> HTML </li>
                        <li><FaCss3 className="skill-icon" /> CSS </li>
                        <li><FaBootstrap className="skill-icon" /> Bootstrap </li>
                        <li><FaReact className="skill-icon" /> React </li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <h3>Back-End Proficiencies</h3>
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li><FaNodeJs className="skill-icon" /> Node.js </li>
                        <li><FaServer className="skill-icon" /> Express.js </li>
                        <li><SiMysql className="skill-icon" /> MySQL </li>
                        <li><SiMongodb className="skill-icon" /> MongoDB </li>
                        <li><SiGraphql className="skill-icon" /> GraphQL </li>
                        <li><FaDatabase className="skill-icon" /> Mongoose </li>
                        <li><FaReact className="skill-icon" /> MERN </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
