import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './InputMessage.css';

const InputMessage = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            <form>
                <div>
                    <h2>Newsletter</h2>
                    <div className={classes.inputBox}>
                        <input placeholder='Enter your email address' />
                    </div>
                    <button className={classes.submitButton}>Subscribe</button>
                </div>
            </form>
        </div>
    );
}


export default InputMessage