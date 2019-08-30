import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './Social.css';
import * as icons from '../../Fonts/styles.css'
const IconsData = [
    { id:1, name: icons.icon_twitter },
    { id:2, name: icons.icon_facebook },
    { id:3, name: icons.icon_google_plus },
    { id:4, name: icons.icon_youtube_play },
    { id:5, name: icons.icon_instagram },
    { id:6, name: icons.icon_pinterest_p },
    { id:7, name: icons.icon_vk }
]
const Social = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            {
                IconsData.map(icon =>
                    <div className={classes.icon} key={icon.id}>
                        <span className={icon.name} />
                    </div>
                )
            }
        </div>
    );
}
export default Social