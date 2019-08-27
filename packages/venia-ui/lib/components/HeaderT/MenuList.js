import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './MenuList.css';
const MenuList = props => {
    const { menu1, menu2, menu3 } = props;
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.TitleList}>
            <span>{menu1}</span>
            <span>
                {menu2}</span>
            <span>
                {menu3}
            </span>
        </div>
    );
}


export default MenuList;