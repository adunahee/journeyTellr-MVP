import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../Common/LogOutButton';
import { Drawer } from 'antd';
import { Typography } from 'antd';
import { Divider } from 'antd';
import { Avatar } from 'antd';
import './Nav.css';
import 'antd/dist/antd.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


import logo from './JourneyTellr-Logo_icononly_Color-version.png';



library.add(faBars)
library.add(faPlusSquare)
library.add(faBell)
library.add(faUsers)
library.add(faBook)
library.add(faHome)
library.add(faSignInAlt)







const { Text } = Typography;



class SideDrawer extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>

                <FontAwesomeIcon
                    className="drawer-btn"
                    icon="bars"
                    size="3x"
                    onClick={this.showDrawer}
                />

                <Drawer
                    width={300}
                    placement="left"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <img src={logo} alt={'logo'} height="40" width="40" className="logo-icon-only" />
                    <Divider />
                    <Link to="/profile" onClick={this.onClose}>
                        <Text strong><Avatar shape="square" size="large" icon="user" /> &nbsp; Profile Will Go Here</Text>
                    </Link>
                    <Divider />
                    <Link to="/choose-template" onClick={this.onClose}>
                        <Text><FontAwesomeIcon icon="plus-square" /> &nbsp; Create New Story</Text>
                    </Link>
                    <Divider />
                    <Link to="/notification" onClick={this.onClose}>
                        <Text><FontAwesomeIcon icon="bell" /> &nbsp; Notifications</Text>
                    </Link>
                    <Divider />
                    <Link to="/search" onClick={this.onClose}>
                        <Text><FontAwesomeIcon icon="book" /> &nbsp; All Stories</Text>
                    </Link>
                    <Divider />
                    <Link to="/home" onClick={this.onClose}>
                        <Text><FontAwesomeIcon icon="home" /> &nbsp; Home</Text>
                    </Link>
                    <Divider />
                    <Link to="/about" onClick={this.onClose}>
                        <Text>About</Text>
                    </Link>
                    <Divider />
                    {this.props.reduxStore.user.id && (
                        <LogOutButton />
                    )}
                </Drawer>
            </div >
        );
    }
};


const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(SideDrawer);

