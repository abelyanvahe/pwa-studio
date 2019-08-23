import React from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
// import logo from './logo.svg';
const logo = "http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/logo-1.png"
const Logo = props => {
    const { height } = props;
    const classes = mergeClasses({}, props.classes);

    return (
        <img
            className={classes.logo}
            src={logo}
            height={height}
            alt="Venia"
            title="Venia"
        />
    );
};

Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string
    }),
    height: PropTypes.number
};

Logo.defaultProps = {
    height: 80
};

export default Logo;
