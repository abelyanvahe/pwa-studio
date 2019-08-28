import React from 'react';
import * as icons from '../Fonts/styles.css';
import { mergeClasses } from '../../classify';
import defaultClasses from './GeneralComponent2.css';

const GeneralComponent2 = props => {
    const { title, data} = props
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <div className={classes.content}>
                {
                    data.map(title =>
                        <div key={title.id} className={classes.item}>
                            <span className={`${icons.icon_angle_right} ${classes.icon}`} />
                            <p className={classes.name}>{title.name}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default GeneralComponent2;