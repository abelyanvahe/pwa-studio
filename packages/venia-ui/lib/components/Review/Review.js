import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './Review.css';

const Review = (props) => {
    const { review,ratingSummary } = props;
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.root}>
            <div className={classes.rating_box}>
                <div 
                    className={classes.rating} 
                    style={{width:`${ratingSummary}%`}}
                />
            </div>
            <div>
                <span>{review}</span>
                <span> Review(s)</span>
            </div>

        </div>
    );
}

export default Review