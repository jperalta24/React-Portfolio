import React from 'react';
import PetFriends from '../../Images/petfriends.png';
import WoWConnect from '../../Images/Project2.png';

function Portfolio() {
    return (
        <section className="project-section my-5" id="Portfolio">
            <div className="resume-section-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card" >
                                <div className="card-header bg-primary">
                                    <h5>Tools/Languages: HTML, JavaScript, Third-Party API's, CSS (Bulma)</h5>
                                </div>
                                <img className="card-img-top" src={PetFriends} alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">PetFriends</h4>
                                        <p className="card-text">PetFriends is an innovative and user-friendly pet adoption application that
                                            utilizes Petfinder's API to connect pet lovers with their perfect furry companions. Our passionate team of developers created this platform with a simple yet powerful goal in mind: to help people find their dream pets with ease and convenience.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <a href="https://jperalta24.github.io/PetFriends/" target="_blank" rel='noreferrer' className="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div className="card-header bg-primary">
                                    <h5>Tools/Languages:JavaScript, Node.js, MySQL, Express, Bootstrap</h5>
                                </div>
                                <img className="card-img-top" src={WoWConnect} alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">WoW-Connect</h4>
                                        <p className="card-text">WoW-Connect is a World of Warcraft LFG.
                                            I spearheaded the development of an application that connects World of Warcraft players, enabling them to play games together seamlessly. As the team lead, I was responsible for both the front and back-end development of the application.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <a href="https://obscure-falls-87878.herokuapp.com/" className="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>

                
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt=""/>
                                    <div class="card-body">
                                        <h4 class="card-title">Project 3 Coming Soon</h4>
                                        <p class="card-text">Short description of Project 3.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="project3.html" class="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt=""/>
                                    <div class="card-body">
                                        <h4 class="card-title">Project 3 Coming Soon</h4>
                                        <p class="card-text">Short description of Project 3.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="project3.html" class="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt=""/>
                                    <div class="card-body">
                                        <h4 class="card-title">Project 3 Coming Soon</h4>
                                        <p class="card-text">Short description of Project 3.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="project3.html" class="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 enlarge-card">
                                <div class="card-header bg-primary">
                                    <h5>Tools/Languages:</h5>
                                </div>
                                <img class="card-img-top" src="project3.jpg" alt=""/>
                                    <div class="card-body">
                                        <h4 class="card-title">Project 3 Coming Soon</h4>
                                        <p class="card-text">Short description of Project 3.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="project3.html" class="btn btn-primary">View Project</a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio