import React, { Component } from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {

    state = {
        navIcon: faBars,
        navClass: "close",
        backdrop: "removeBackdrop",
        navPosition: "absolute"
    }

    sideDrawerToggleHandler = () => {
        this.props.sideDrawerToggleHandler();
        let newNavIcon = this.props.showNav ? faTimes : faBars;
        let newNavClass = this.props.showNav ? "open" : "";
        let newBackdrop = this.props.showNav ? "backdrop" : "";
        let newNavPosition = this.props.showNav ? "fixed" : "absolute";
        this.setState({ navIcon: newNavIcon, navClass: newNavClass, backdrop: newBackdrop, navPosition: newNavPosition });
    }

    render() {
        return (
            <div id="Nav" className={this.state.navPosition}>
                <FontAwesomeIcon onClick={this.sideDrawerToggleHandler} className="nav-icon" icon={this.state.navIcon} />
                <div className={this.state.backdrop}></div>
                <nav className={this.state.navClass}>
                    <ul className="nav center">
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                            onClick={this.sideDrawerToggleHandler}
                        >
                            <li>About</li>
                        </Link>
                        <a onClick={this.sideDrawerToggleHandler} href="/ShananAlmarioResume2020.pdf" target="_blank" rel="noopener noreferrer" download>
                            <li>Resume</li>
                        </a>
                        <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                            onClick={this.sideDrawerToggleHandler}
                        >
                            <li>Projects</li>
                        </Link>
                        {/*<Link
                            className="project-item"
                            activeClass="active"
                            to=""
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                            onClick={this.sideDrawerToggleHandler}
                        >
                            <li>Stepsister's Story</li>
                        </Link>
                        <Link
                            className="project-item"
                            activeClass="active"
                            to=""
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                            onClick={this.sideDrawerToggleHandler}
                        >
                            <li>FortuneBot</li>
                        </Link>*/}
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                            onClick={this.sideDrawerToggleHandler}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navigation;