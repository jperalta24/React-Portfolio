import React from 'react';
import PetFriends from '../../Images/petfriends.png';
import WoWConnect from '../../Images/Project2.png';
import ConstructDaily from '../../Images/ConstructDaily.png';
import { FaGithub } from 'react-icons/fa';

function Portfolio() {
    return (
        <section className="project-section my-5" id="Portfolio">
            <div className="resume-section-content">
            <h1 className='navTitle'>Portfolio</h1>
                <div className="container port-container">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card" >
                                <div className="card-header portfolio-header">
                                    <h5>Tools/Languages: HTML, JavaScript, Third-Party API's, CSS (Bulma)</h5>
                                </div>
                                <img className="card-img-top" src={PetFriends} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">PetFriends</h4>
                                    <p className="card-text">PetFriends is a user-centric pet adoption application. It leverages Petfinder's API to match prospective pet owners with their ideal companions. Our team developed this platform with a clear objective: to streamline pet adoption, making it easier and more convenient for users. 
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="https://jperalta24.github.io/PetFriends/" target="_blank" rel='noreferrer' className="btn btn-primary">View Project</a>
                                    <a href="https://github.com/jperalta24/PetFriends" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div className="card-header portfolio-header">
                                    <h5>Tools/Languages:JavaScript, Node.js, MySQL, Express, Bootstrap</h5>
                                </div>
                                <img className="card-img-top" src={WoWConnect} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">WoW-Connect</h4>
                                    <p className="card-text">WoW-Connect is a World of Warcraft LFG.
                                    WoW-Connect serves as an engaging platform for World of Warcraft gamers seeking group play. I led the development of this application, ensuring seamless connectivity among players. I was responsible for both front-end and back-end development. 
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="https://obscure-falls-87878.herokuapp.com/" className="btn btn-primary">View Project</a>
                                    <a href="https://github.com/jperalta24/WoW-Connect" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header portfolio-header">
                                    <h5>Tools/Languages:MERN</h5>
                                </div>
                                <img class="card-img-top" src={ConstructDaily} alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">ConstructDaily</h4>
                                    <p class="card-text">ConstructDaily is a construction project management tool designed to help project managers efficiently manage and monitor project progress, resource usage, safety incidents, and communication among team members. It provides a user-friendly interface for creating and updating daily logs for each project, with a wide range of information fields such as work completed, materials used, equipment usage, weather conditions, delays and disruptions, safety incidents, and communication.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="https://peaceful-refuge-36049.herokuapp.com/" class="btn btn-primary">View Project</a>
                                    <a href="https://github.com/jperalta24/ConstructDaily" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Project 3 Coming Soon</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                                </div>
                                <div class="card-footer">
                                    <a href="project3.html" class="btn btn-primary">View Project</a>
                                    <a href="blank" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Project 3 Coming Soon</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                                </div>
                                <div class="card-footer">
                                    <a href="project3.html" class="btn btn-primary">View Project</a>
                                    <a href="blank" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title">Project 3 Coming Soon</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                                </div>
                                <div class="card-footer">
                                    <a href="project3.html" class="btn btn-primary">View Project</a>
                                    <a href="blank" target="_blank" rel='noreferrer'>
                                        <i className='icons'>
                                            <FaGithub size={45} />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio