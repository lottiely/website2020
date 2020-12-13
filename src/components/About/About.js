import React, { Component } from 'react';

import photo from '../../assets/images/photo.jpg'
import Heading from '../../assets/section-label/sectionLabel';

class About extends Component {

    render() {
        return (
            <div id="About" className="center">
                <div className="about-me-container center">
                    <div className="inner-container">
                        <div className="image-container">
                            <img className="my-photo" src={photo} alt="me" />
                            <div className="square"></div>
                        </div>
                        <div className="right-content">
                            <div className="about-title">
                                <Heading className="center" title="ABOUT ME" />
                            </div>
                            <div className="text-container">
                                <div className="tldr">
                                    <h2>In a few words, I&#39;m</h2>
                                    <ul>
                                        <li>a front-end software engineer.</li>
                                        <li>a mentor.</li>
                                        <li>a forever student.</li>
                                        <li>pretty good at tetris.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h2>A little bit more about me...</h2>
                        <p>
                            I am a front-end software engineer currently based in Seattle, Washington. I am currently interested in full-time employment in front-end development.<br /><br />
                            I was born and raised in Alaska where I developed my love for ice skating and hiking. When I&#39;m not running around in the wild, I enjoy playing video games or board games with friends. I&#39;m adventurous; I ask questions; I&#39;m curious, and I&#39;m always looking for the next new thing to learn or a new puzzle to solve. <br /><br />
                            Currently, I am working as a Test Engineer for Microsoft where I get to work with an assortment of technologies including Python/pytest, C#/ASP.net and chef. Since my interest mostly lie in front-end development, I am also working part-time at employHER as a front-end developer where I get to work with React/Redux, TypeScript, and AWS.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;