import React from 'react';
import Logo from '../LogoT';
import { Link, resourceUrl } from '@magento/venia-drivers';
import { mergeClasses } from '../../classify';
import defaultClasses from './About.css';
import * as icons from '../Fonts/styles.css'
const About = props => {
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.aboutStyle}>
            <h1>About Ultimo</h1>
            <div className={classes.logo}>
                <Link to={resourceUrl('/')}>
                    <Logo classes={{ logo: classes.logo }} />
                </Link>
            </div>
            <div className={classes.aboutContent}>
                <p>
                    Ultimo is a premium Magento theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive.
                </p>
                <a href="ee" className={classes.link}>
                    <h2>Buy these theme</h2>
                    <span className={icons.icon_angle_right} />
                </a>
            </div>

        </div>
    );
}

export default About;