import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './SubHeader.css';
import * as icons from '../../Fonts/styles.css'
import kingdom from './kingdom.svg';
import MenuList from '../MenuList';
const SubHeader = props => {
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.root}>
            <div className={classes.leftCorner}>
                <div className={classes.phone}>
                    <span className={icons.icon_phone} />
                    <span >Call +001 555 801</span>
                </div>
                    <MenuList
                         menu1 ='All demos'
                         menu2='Features'
                         menu3='Buy me!'
                    />
                <div>
                    <span>Welcome msg!</span>
                </div>
            </div>
            <div className={classes.rightCorner}>
             
                    <span>
                        <img src={kingdom} alt='flag' />
                    </span>
                    <span>Demo1</span>
                    <span className={icons.icon_down_open_mini} />

            </div>
        </div>
    );
}

export default SubHeader;