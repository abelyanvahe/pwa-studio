import React from 'react';
import * as icons from '../Fonts/styles.css';
import { mergeClasses } from '../../classify';
import defaultClasses from './CarouselHeader.css';
const CarouselHeader = (props) => {
    const { title, next, prev} = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div>
            <div className={classes.titleContent}>
                <span >
                    <h2>{title}</h2>
                </span>
                <span className={classes.buttonGroup}>
                    <button onClick={prev}>
                        <span className={icons.icon_angle_left} />
                    </button>
                    <button onClick={next}>
                        <span className={icons.icon_angle_right} />
                    </button>
                </span>
            </div>
            <hr />
        </div>
    );
}

export default CarouselHeader;