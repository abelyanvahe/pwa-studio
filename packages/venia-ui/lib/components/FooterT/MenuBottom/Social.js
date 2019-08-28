import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './Social.css';
import * as icons from '../../Fonts/styles.css'
const IconsData = [
    { name: icons.icon_twitter },
    { name: icons.icon_facebook },
    { name: icons.icon_google_plus },
    { name: icons.icon_youtube_play },
    { name: icons.icon_instagram },
    { name: icons.icon_pinterest_p },
    { name: icons.icon_vk }
]
const Social = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            {
                IconsData.map(icon =>
                    <div className={classes.icon}>
                        <span className={icon.name} />
                    </div>
                )
            }
        </div>
    );
}

export default Social