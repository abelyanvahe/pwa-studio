import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './GeneralComponent.css';

const GeneralComponent = props => {
    const { data, title, } = props;
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <div className={classes.content}>
                {
                    data.map(item =>
                        <div key={item.id} className={classes.item}>
                            <div className={classes.number}>
                                <span className={item.style}>
                                    {
                                        item.style === undefined ? item.id : null
                                    }
                                </span>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}


export default GeneralComponent;