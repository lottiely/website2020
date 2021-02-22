import React, { Component } from 'react';
import Heading from '../../assets/section-label/sectionLabel';
import fortune from '../../assets/images/fortune_app.gif';
import animatedLysander from '../../assets/images/animatedLysander.gif';
import ella from '../../assets/images/ella.png';
import choice from '../../assets/images/choice.png'

class Projects extends Component {
    render() {
        return (
            <div id="Projects">
                <div className="main-container center">
                    <Heading title="PROJECTS" />
                    <div className="content-container center">
                        <div className="project-container center card">
                            <div className="text-details">
                                <h2>A Stepsister's Story</h2>
                                <ul className="tech-details">
                                    <li><h3>Technology: <span>Unity, C#, ClipStudio</span></h3> </li>
                                    <li><h3>Tools: <span>Visual Studio</span></h3></li>
                                </ul>
                                <p>A visual novel based off the fairy tale Cinderella where the player is Cinderella's stepsister. 
                                The player will be presented choices of actions that the stepsister will do throughout the game that will determine the story's ending for the stepsister.
                                I created a dialogue system, character manager, and novel controller in C# for a functional visual novel. 
                                For easier chapter creation and loading, I created chapter scripting that will take chapters as a text file and parse each line and execute novel actions. <br /><br />
                                <b><i>Below are screenshots of my development progress on the novel's functionality. I do not own the art in the following screenshots, and borrowed art to test the visual novel's functionality.</i></b></p>
                           <div className="image-details center">
                                <span>
                                    <img className="project-image" src={animatedLysander} alt="project" />
                                    <img className="project-image" src={ella} alt="project" />
                                    <img className="project-image" src={choice} alt="project" />
                                </span>
                            </div>
                           {/*<p>[Click for Details]</p>*/}
                            </div>
                        </div>
                        <div className="project-container center card">
                            <div className="text-details">
                                <h2>Fortune Bot</h2>
                                <ul className="tech-details">
                                    <li><h3>Technology: <span>Flask, Python, PyTest</span></h3> </li>
                                    <li><h3>Tools: <span>VSCode</span></h3></li>
                                </ul>
                                <p>Fortune Bot is an API that will allow the user to enter in a fortune and its author into the database.
                                The API calls allow the user to create, approve, or delete a fortune.
                           This was a group project where I created the API for Fortune Bot in Python and Flask, and I used unit testing with PyTest for a code coverage of 91%.</p>
                           <div className="image-details">
                                <img className="project-image" src={fortune} alt="project" />
                            </div>
                           {/*<p>[Click for Details]</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Projects;