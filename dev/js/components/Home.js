import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { Button } from 'react-foundation-components/lib/button';
import myAvatar from "../../images/myAvatar.svg";

export default class Home extends React.Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="medium-7 large-9 columns">
                        <h2>{this.props.FullName}</h2>
                        <h4>{this.props.Title}</h4>
                        <p className="subheader">{ this.props.Description }</p>
                        <a className="button" href="/about">Learn more</a>
                    </div>
                    <div className="medium-5 large-3 columns">
                        <img src={myAvatar} alt="picture of space"></img>
                    </div>
                </div>
                <hr />

                <div className="fullscreen-image-slider">
                    <div className="orbit" role="region" aria-label="FullScreen Pictures" data-orbit>
                        <ul className="orbit-container">
                        <button className="orbit-previous">
                            <span className="show-for-sr">Previous Slide</span>
                            <span className="nav fa fa-chevron-left fa-3x"></span>
                        </button>
                        <button className="orbit-next">
                            <span className="show-for-sr">Next Slide</span>
                            <span className="nav fa fa-chevron-right fa-3x"></span>
                        </button>
                        <li className="is-active orbit-slide">
                            <img className="orbit-image" src="https://i.imgur.com/16z9ObN.jpg" alt="Space"></img>
                            <figcaption className="orbit-caption">
                            <h1>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit.</h1>
                            </figcaption>
                        </li>
                        <li className="orbit-slide">
                            <img className="orbit-image" src="https://i.imgur.com/JD4Caxa.jpg" alt="Space"></img>
                            <figcaption className="orbit-caption">
                            <h1>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit.</h1>
                            </figcaption>
                        </li>
                        <li className="orbit-slide">
                            <img className="orbit-image" src="https://i.imgur.com/rsTQbNV.jpg" alt="Space"></img>
                            <figcaption className="orbit-caption">
                            <h1>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit.</h1>
                            </figcaption>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Home.defaultProps = {
    FullName: 'Chao Zhang',
    Title: 'Full Stack Developer',
    Description: "As a Software Engineer, I have amassed extensive experience in developing " +
        "all kinds of Desktop, Web and Mobile Applications. In addition, I am also involved in some research " +
        "work on wireless networks. In general, I am self-motivated and love to learn new cutting-edge " +
        "echnologies to broaden my horizon in different aspects. My past experience enabled me to prioritize " +
        "and remain focused on the essence of goals to be achieved, enhance my ability to learn new concepts " +
        "quickly while working under pressure to analyze and resolve complex issues.",
    cardUrl: 'Card Url',
    cardContent: [],
};

Home.propTypes = {
    FullName: PropTypes.string,
    Title: PropTypes.string,
    Description: PropTypes.string,
};