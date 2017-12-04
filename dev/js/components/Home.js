import React from 'react'
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { Button } from 'react-foundation-components/lib/button';

const Home = () => (
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
)

export default Home