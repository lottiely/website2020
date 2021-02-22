import React, { Component } from 'react';

import photo from '../../assets/images/photo.jpg'
import Heading from '../../assets/section-label/sectionLabel';

import Modal from '../../assets/modal/modal';
import fire from '../../assets/images/fire.jpg'

class About extends Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    };
    
    handleClose = () => {
        this.setState({open: false})
    };

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
                            I was born and raised in Alaska where I developed my love for ice skating and hiking. When I&#39;m not running around in the wild, I am playing video games or board games with friends. Additionally, I have an appreciation for memes and <span onClick={this.handleOpen}>FIRE</span> (Financially Independent Retire Early).<br /><br />
                            Currently, I am working as a Test Engineer for Microsoft where I get to work with an assortment of technologies including Python/pytest, C#/ASP.net and chef. Since my interest mostly lie in front-end development, I am also working part-time at employHER as a front-end developer where I get to work with React, TypeScript, and AWS.
                        </p>
                        <Modal modalstyle="fire" imgsrc={fire} open={this.state.open} handleClose={this.handleClose} />
                    </div>
                </div>
            </div>
        )
    }
};

export default About;