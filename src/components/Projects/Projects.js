import React, { Component } from 'react';
import Heading from '../../assets/section-label/sectionLabel';
import fortune from '../../assets/images/fortune_app.gif'

class Projects extends Component {
    render() {
        return (
            <div id="Projects" className="center">
                <Heading title="PROJECTS" />
                <div className="main-container center">
                    <div className="image-details center">
                        <img className="project-image" src={fortune} alt="project" />
                    </div>
                    <div className="text-details">
                        <h2>Fortune Bot</h2>
                        <ul className="tech-details">
                            <li><h3>Technology: <span>Flask, Python, PyTest</span></h3> </li>
                            <li><h3>Tools: <span>VSCode</span></h3></li>
                        </ul>
                        <p>Fortune Bot is an API that will allow the user to enter in a fortune and its author into the database. 
                           The API calls allow the user to create, approve, or delete a fortune.
                           This was a group project where I created the API for Fortune Bot in Python and Flask, and I used unit testing with PyTest for a code coverage of 91%.</p>
                    </div>
                </div>

            </div>
        )
    }
};

export default Projects;