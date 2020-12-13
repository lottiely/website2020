import React, { Component } from 'react';
import { ReactComponent as Welcome } from '../../assets/svg/welcome.svg';
import Arrow from '../../assets/arrow/arrow';
import { Link } from "react-scroll";

class Landing extends Component {
    render() {
        return (
            <div id="Landing" className="center">
                <Welcome className="welcome" />
                <p className="intro">Hi, my name is Shanan.</p>
                <div className="arrow-container center">
                    <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={200}
                        >
                        <Arrow className="arrow" />
                    </Link>
                </div>
            </div>
        )
    }
};

export default Landing;