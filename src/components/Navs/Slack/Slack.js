import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import whiteLogo from '../../../assets/Slack/slack_white.png';
import rgbLogo from '../../../assets/Slack/slack_rgb.png';

import './Slack.css';

class Slack extends Component {
    state = {
        rgbClassName: ['nav__slack', '.up'],
        whiteClassName: ['nav__slack', 'fixed'],
        mobileOpen: false
    };

    /*  Setup listener for scrolling
    */
    componentDidMount = () => {
        window.addEventListener('scroll', _.throttle(this.handleScroll, 20));
        window.addEventListener('resize', _.throttle(this.handleResize, 50));
    };

    /*  Setup listener for scrolling
    */
    componentWillUnmount = () => {
        this.handleScroll();
        window.removeEventListener('scroll', _.throttle(this.handleScroll, 20));
        window.removeEventListener('resize', _.throttle(this.handleResize, 50));
    };

    /*  Reset mobileOpen if window too wide
    */
    handleResize = () => {
        if (window.innerWidth > 770) {
            this.setState({
                mobileOpen: false
            });
            document.querySelector('body').classList.remove('stop-scroll');
        }
    };

    /*  set mobileOpen to true
    */
    setMobile = () => {
        document.querySelector('body').classList.add('stop-scroll');
        this.setState({ mobileOpen: true });
    };

    /*  Toggle classes to each nav bar depending on scroll position
    */
    handleScroll = () => {
        const scrollPosition = window.scrollY;
        let rgbClassName = ['nav__slack'];
        let whiteClassName = ['nav__slack', 'fixed'];

        if (scrollPosition > 30) {
            /*  add 'down' to white, 'up' to rgb
            */
            whiteClassName = whiteClassName.concat('down');
            rgbClassName = rgbClassName.concat('up');
        } else {
            /*  add 'up' to white, 'down' to rgb
            */
            whiteClassName = whiteClassName.concat('up');
            rgbClassName = rgbClassName.concat('down');
        }

        this.setState({
            whiteClassName,
            rgbClassName
        });
    };

    render() {
        return (
            <Fragment>
                <div className="nav__wrapper">
                    <nav
                        className={this.state.whiteClassName.join(' ')}
                        ref={node => (this.whiteNav = node)}
                    >
                        <img
                            src={rgbLogo}
                            alt="slack white logo"
                            className="slack__icon slack__icon--white"
                        />
                        <h1>Developers</h1>
                        <ul className="slack__list">
                            <li>
                                <a className="slack__link">Documentation</a>
                            </li>
                            <li>
                                <a className="slack__link">App Directory</a>
                            </li>
                            <li>
                                <a className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    className="slack__link menu__mobile menu--white"
                                    onClick={this.setMobile}
                                >
                                    Menu
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className={this.state.rgbClassName.join(' ')}
                        ref={node => (this.rgbNav = node)}
                    >
                        <img
                            src={whiteLogo}
                            alt="slack rgb logo"
                            className="slack__icon slack__icon--rgb"
                        />
                        <h1>Developers</h1>
                        <ul className="slack__list">
                            <li>
                                <a className="slack__link">Documentation</a>
                            </li>
                            <li>
                                <a className="slack__link">App Directory</a>
                            </li>
                            <li>
                                <a className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    className="slack__link menu__mobile menu--rgb"
                                    onClick={this.setMobile}
                                >
                                    Menu
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className={[
                            'slack__mobile',
                            this.state.mobileOpen ? 'mobile-open' : ''
                        ].join(' ')}
                    >
                        <img
                            src={whiteLogo}
                            alt="slack white logo"
                            className="slack__icon slack__mobile--logo"
                        />
                        <a
                            className="slack__mobile--close"
                            onClick={() => {
                                this.setState(prevState => ({
                                    mobileOpen: false
                                }));
                                document
                                    .querySelector('body')
                                    .classList.remove('stop-scroll');
                            }}
                        >
                            X
                        </a>
                        <ul className="slack__list--mobile">
                            <li>
                                <a className="slack__mobile--link">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a className="slack__mobile--link">
                                    App Directory
                                </a>
                            </li>
                            <li>
                                <a className="slack__mobile--link">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default Slack;
