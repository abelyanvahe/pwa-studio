import React, { Component } from 'react';
import { connect } from '@magento/venia-drivers';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import classify from '../../classify';
import { toggleDrawer } from '../../actions/app';
import defaultClasses from './SignIn.css';
import * as icons from '../Fonts/styles.css';

class SignInTrigger extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            root: PropTypes.string
        }),
        openSignIn: PropTypes.func.isRequired
    };

    render() {
        const { classes, openSignIn } = this.props;
        return (
            <span>
                <button
                    className={classes.root}
                    onClick={openSignIn}
                >
                    <span className={icons.icon_user} />
                </button>
            </span>

        );
    }
}


const mapDispatchToProps = dispatch => ({
    openSignIn: () => dispatch(toggleDrawer('signIn'))
});

export default compose(
    classify(defaultClasses),
    connect(
        null,
        mapDispatchToProps
    )
)(SignInTrigger);
