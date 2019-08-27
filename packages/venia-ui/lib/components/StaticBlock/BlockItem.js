import React from 'react';
import defaultClasses from './BlockItem.css';
import { mergeClasses } from '../../classify';

const BlockItem = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { blockItem } = props;
    const { icon, title, meta, text } = blockItem;
    return (
        <div className={classes.root}>

            <div className={classes.leftSide}>
                <div className={classes.iconOverlap}>
                    <div className={classes.iconStyle}>
                        <span className={icon} />
                    </div>
                </div>

            </div>

            <div className={classes.rightSide}>
                <h4>{meta}</h4>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default BlockItem;