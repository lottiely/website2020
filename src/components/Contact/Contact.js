import React, { Component } from 'react';
import Heading from '../../assets/section-label/sectionLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Mailbox } from '../../assets/svg/mailbox.svg';

class Contact extends Component {
    render() {
        return (
            <div id="Contact" className="center">
                <div className="main-container">
                    <div className="contact-image center">
                        <Mailbox />
                        <Heading title="CONTACT" />
                    </div>
                    <div className="content-container center">
                        <div className="icons center">
                            <a className="contact-info center" href="mailto: saialmario1@gmail.com" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="icon primary" icon={faEnvelope} /><span>saialmario1@gmail.com</span>
                            </a>
                            <div className="other-icons">
                                <a href="https://www.linkedin.com/in/shananalmario/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon secondary" icon={faLinkedin} /></a>
                                <a href="https://github.com/lottiely" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon primary" icon={faGithub} /></a>
                                <a href="https://www.instagram.com/lottielyart/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon secondary" icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Contact;