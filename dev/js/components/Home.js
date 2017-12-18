import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { Button } from 'react-foundation-components/lib/button';
import myAvatar from "../../images/myAvatar.svg";
var Carousel = require('react-responsive-carousel').Carousel;
import image1 from "../../images/NiceToMeetYou.png";
import image2 from "../../images/projects.png";
import image3 from "../../images/3.jpeg";

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
                <div className="carousel-row">
                    <Carousel autoPlay interval={5000} infiniteLoop>
                        <div>
                            <img src={image1} alt="image1"/>
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={image2} alt="image2"/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={image3} alt="image3"/>
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
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