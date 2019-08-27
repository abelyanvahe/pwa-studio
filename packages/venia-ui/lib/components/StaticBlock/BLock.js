import React from 'react';
import defaultClasses from './Block.css';
import { mergeClasses } from '../../classify';
import BlockItem from './BlockItem';
import * as icons from '../Fonts/styles.css';


const data = [
    {
        id:1,
        icon: icons.icon_paint_brush,
        title: 'Unlimited Colors',
        meta: 'CUSTOMIZABLE DESIGN',
        text: 'You have never seen so many options! Change colors of dozens of elements, apply textures, upload background images...'
    },
    {
        id:2,
        icon: icons.icon_mobile,
        title: 'Responsive Layout',
        meta: '12-COLUMN GRID',
        text: 'Ultimo can be displayed on any screen. It is based on fluid grid system. If screen is resized, layout will be automatically adjusted...'
    },
    {
        id:3,
        icon: icons.icon_bars,
        title: 'Mega Menu',
        meta: 'CUSTOMIZABLE DROP-DOWN MENU',
        text: 'Two styles: wide mega menu or classic drop-down menu. You can add any custom content to any category in the catalog...'
    }
]
const Block = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            {
                data.map(item =>
                    <BlockItem blockItem={item} key={item.id}/>
                )
            }
        </div>
    );
}

export default Block;