import React from 'react';

import SiteHeader from '../containers/site-header';
import SiteFooter from '../containers/site-footer';
import Main from './Main'

require('../../scss/style.scss');

const App = () => (
    <div>
        <SiteHeader />
        <br/>
        <Main />
        <br/>
        <SiteFooter />
    </div>
);

export default App;
