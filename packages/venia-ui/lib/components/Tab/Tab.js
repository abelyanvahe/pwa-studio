import React, { useState } from 'react';
import defaultClasses from './Tab.css';
import { mergeClasses } from '../../classify';
import $ from "jquery";
const tabsdata = [
    {
        name: 'Details',
        content: 'this is Details !'
    },
    {
        name: 'Aditional Info',
        content: 'this is Aditional Info !'
    },
    {
        name: 'Reviews',
        content: 'this is Reviews !'
    },
    {
        name: 'Tags',
        content: 'this is Tags !'
    },
]
const Tab = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const [ active, setActive ] = useState(0);
    const changeActive = (e) => {
        const active = $(e.target).data('index');
        setActive(active)
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.items}>
                {
                    tabsdata.map((tab, index) =>
                        <>
                            <div onClick={changeActive} >
                                <span data-index={index}>{tab.name}</span>
                            </div>
                            <div className={index == active ? classes.content + ' ' + classes.active : classes.content}>
                                {tab.content}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Tab;