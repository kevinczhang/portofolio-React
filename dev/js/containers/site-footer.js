import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { handleToggle } from '../actions/index';

class SiteFooter extends Component {
    render() {
        return (
            <div className="row expanded callout secondary">
                <div className="medium-6 columns">
                    <ul className="menu">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Partner</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </div>
                <div className="medium-6 columns">
                    <ul className="menu float-right">
                        <li className="menu-text">Copyright</li>
                    </ul>
                </div>
            </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(SiteFooter);

