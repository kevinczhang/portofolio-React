import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { handleToggle } from '../actions/index';

import { TopBar, TopBarItem, TopBarTitle } from 'react-foundation-components/lib/top-bar';
import { Menu, MenuItem } from 'react-foundation-components/lib/menu';
import { MenuIcon } from 'react-foundation-components/lib/menu-icon';
import { ShowForScreenSize, HideForScreenSize } from 'react-foundation-components/lib/visibility';
import { Button } from 'react-foundation-components/lib/button';

class SiteHeader extends Component {
    render() {
        return (
            <TopBar stack="medium">
                <TopBarTitle>
                    <Menu>
                        <HideForScreenSize screenSize="large" componentClass={ MenuItem }>
                            <MenuIcon dark onClick={() => this.props.handleToggle(this.props.show)} />
                        </HideForScreenSize>
                        <MenuItem><a href="/">Profolio</a></MenuItem>
                    </Menu>
                </TopBarTitle>
                <ShowForScreenSize screenSize={this.props.show ? 'small' : 'large'}>
                    <TopBarItem position="left">
                        <Menu vertical horizontal="large">
                            <MenuItem><a href="/about">About</a></MenuItem>
                            <MenuItem><a href="/projects">Projects</a></MenuItem>
                        </Menu>
                    </TopBarItem>
                    <TopBarItem position="right">
                        <Menu>
                            <MenuItem><input type="search" placeholder="Search" /></MenuItem>
                            <MenuItem><Button>Search</Button></MenuItem>
                        </Menu>
                    </TopBarItem>
                </ShowForScreenSize>
            </TopBar>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        show: state.topMenu
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({handleToggle: handleToggle}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SiteHeader);

