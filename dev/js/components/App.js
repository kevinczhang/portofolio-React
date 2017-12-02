import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import MenuTop from '../containers/menu-top';
import { Button } from 'react-foundation-components/lib/button';

require('../../scss/style.scss');

const App = () => (
    <div>
        <MenuTop />
        <a className="myAnchor" href="/">Test myAnchor</a>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <div className="button-basics-example">
            <Button href="../typography/base">Learn More</Button>
            <Button href="../general/visibility#mainContent">View All Features</Button>
            <Button color="success">Save</Button>
            <Button color="alert">Delete</Button>
            <br/>
            <Button size="tiny">So Tiny</Button>
            <Button size="small">So Small</Button>
            <Button>So Basic</Button>
            <Button size="large">So Large</Button>
        </div>
    </div>
);

export default App;
