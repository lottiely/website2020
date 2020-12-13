import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import Nav from '../../components/Nav/Navigation';

class Layout extends Component {
    state = {
        showNav: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showNav: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showNav: !prevState.showNav };
        })
    }

    render() {
        return (
            <Auxiliary className="layout">
                    <Nav
                        showNav={this.state.showNav}
                        sideDrawerClosedHandler={this.sideDrawerClosedHandler}
                        sideDrawerToggleHandler={this.sideDrawerToggleHandler}
                    />
                    <main>
                        {this.props.children}
                    </main>
            </Auxiliary>
        )
    }
};

export default Layout;