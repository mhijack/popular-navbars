import React, { lazy, Suspense } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import utilities from '../../utilities/index.js';

import './Menu.css';

const Slack = lazy(() => import('../../components/Navs/Slack/Slack'));

const NAVBAR_CONFIG = [
    {
        name: 'slack',
        
    }
]

const Menu = props => {
    return (
        <div className="menu">
            <p>Pick a brand to see its navbar created with CSS flexbox!</p>

            <Link to="/slack" className="menu__link menu__link--slack">
                Slack
            </Link>

            <Link to="/medium" className="menu__link menu__link--medium">
                Medium
            </Link>

            <Link to="/github" className="menu__link menu__link--github">
                Github
            </Link>

            <Link to="/twitter" className="menu__link menu__link--twitter">
                Twitter
            </Link>

            <Link to="/facebook" className="menu__link menu__link--facebook">
                Facebook
            </Link>
        </div>
    );
};

export default Menu;
