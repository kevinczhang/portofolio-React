import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { Button } from 'react-foundation-components/lib/button';
import myAvatar from "../../images/myAvatar.svg";

export default class Projects extends React.Component {
    render(){
        return (
            <div>                
                <div className="portfolio-resume row">
                    <div className="large-4 columns">
                        <div className="portfolio-resume-wrapper">
                            <img className="portfolio-resume-headshot" src="https://placehold.it/175" alt="headshot" />
                            <h3 className="portfolio-resume-header">Skills</h3>
                            <ul>
                                <li>Playing Cornhole</li>
                                <li>Balancing on my head</li>
                                <li>Drinking milk</li>
                                <li>Going to sleep</li>
                                <li>Not updating my phone apps</li>
                            </ul>
                        </div>
                    </div>
                    <div className="large-4 columns">
                        <div className="portfolio-resume-wrapper">
                            <h3 className="portfolio-resume-header">Experience</h3>
                            <div className="portfolio-resume-spacing">
                                <h5><strong>Nanny for Goats</strong></h5>
                                <p>I spent a year at a farm in Ireland raising baby goats. I had to feed them, pet them and play. </p>
                                <ul>
                                    <li>Making goats noises</li>
                                    <li>Cleaning their stalls</li>
                                    <li>Milking the goats</li>
                                </ul>
                            </div>
                            <div className="portfolio-resume-spacing">
                                <h5><strong>SandCastle Builder</strong></h5>
                                <p>I have crafted the skill of sandcastles growing up on the beaches of Galveston.</p>
                                <ul>
                                    <li>Avoiding Jellyfish</li>
                                    <li>Applying the right amount of water</li>
                                    <li>Wearing sunscreen</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="large-4 columns">
                        <div className="portfolio-resume-wrapper">
                            <h3 className="portfolio-resume-header">About Me</h3>
                            <p>My eclectic background and hippy upbringing makes me a rare commodity. I'd love to get together and talk over a non-GMO kale smoothie. Email or call me anytime!</p>
                            <div className="portfolio-resume-contact-info">
                                <a href="mailto:#"><i className="fa fa-envelope" aria-hidden="true"></i>someone@email.com</a>
                            </div>
                            <div className="portfolio-resume-contact-info">
                                <a href="tel:+14083410600"><i className="fa fa-phone" aria-hidden="true"></i>555.555.5555</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <a className="myAnchor" href="/">Test myAnchor</a>
                    <h2>User List</h2>
                    <UserList />
                    <hr />
                    <h2>User Details</h2>
                    <UserDetails />
                </div>
            </div>
        )
    }
}

Projects.defaultProps = {
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

Projects.propTypes = {
    FullName: PropTypes.string,
    Title: PropTypes.string,
    Description: PropTypes.string,
};