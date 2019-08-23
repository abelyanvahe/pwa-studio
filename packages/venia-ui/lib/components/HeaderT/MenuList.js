import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './MenuList.css';
const MenuList = props => {
    const { menu1, menu2, menu3 } = props;
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.TitleList}>
            <span><a href="pp">{menu1}</a></span>
            <span>
                <a href="pp">{menu2}</a></span>
            <span>
                <a href="pp">{menu3}</a>
            </span>
        </div>
    );
}


export default MenuList;