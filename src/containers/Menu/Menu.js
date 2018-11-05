import React, { lazy, Suspense, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import utilities from '../../utilities/index.js';

import './Menu.css';

const NAV_NAMES = ['slack', 'medium', 'github', 'twitter', 'facebook'];

const Slack = lazy(() => import('../../components/Navs/Slack/Slack'));

const Menu = props => {
    return (
        <>
            <div className="menu">
                <ul className="menu__list">
                    {NAV_NAMES.map(name => {
                        return (
                            <li key={name} className="menu__link">
                                <Link
                                    to={`/${name}`}
                                    className={`menu__link--${name}`}
                                >
                                    {utilities.capitalize(name)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <p>Pick a brand to see its navbar created with CSS flexbox!</p>
            </div>

            {/* Slack Component */}
            <Route
                path="/slack"
                render={props => {
                    return (
                        <Suspense fallback={<div>loading component</div>}>
                            <Slack />
                        </Suspense>
                    );
                }}
            />
        </>
    );
};

export default Menu;
