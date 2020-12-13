import React from 'react';

import './App.scss';

import Layout from './containers/Layout/Layout';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

function App() {
  return (
    <div>
      <Layout>
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Link
          activeClass="hide"
          to="Landing"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <div className="top center">
            <FontAwesomeIcon className="top-button" icon={faChevronUp} />
          </div>
        </Link>
      </Layout>
    </div>
  );
}

export default App;
