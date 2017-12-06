import React from 'react'
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { Button } from 'react-foundation-components/lib/button';

const Home = () => (
    <div>
        <div className="row">
            <div className="medium-7 large-6 columns">
                <h1>Close Your Eyes and Open Your Mind</h1>
                <p className="subheader">There is beauty in space, and it is orderly. There is no weather, and there is regularity. 
                    It is predictable. Everything in space obeys the laws of physics. If you know these laws, and obey them, space will treat you kindly.</p>
                <Button className="button">Take a Tour</Button>
                <Button className="button">Start a free trial</Button>
            </div>
            <div className="show-for-large large-3 columns">
                <img src="https://placehold.it/400x370&amp;text=PSR1257 + 12 C" alt="picture of space"></img>
            </div>
            <div className="medium-5 large-3 columns">
                <div className="callout secondary">
                    <form>
                        <div className="row">
                            <div className="small-12 columns">
                                <label>Find Your Dream Planet
                                    <input type="text" placeholder="Search destinations"/>
                                </label>
                            </div>
                            <div className="small-12 columns">
                                <label>Number of Moons
                                    <input type="number" placeholder="Moons required"/>
                                </label>
                                <button type="submit" className="button">Search Now!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr/>
        
        <div className="portfolio-resume row">
            <div className="large-4 columns">
    <div className="portfolio-resume-wrapper">
      <img className="portfolio-resume-headshot" src="https://placehold.it/175" alt="headshot"/>
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

export default Home