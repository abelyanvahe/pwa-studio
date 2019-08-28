import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './MenuBottom.css';
import InputMessage from './InputMessage';
import Social from './Social';
const MenuBottom = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            <div>
                <Social />
            </div>
            <div>
                <InputMessage />
            </div>
        </div>
    );
}

export default MenuBottom