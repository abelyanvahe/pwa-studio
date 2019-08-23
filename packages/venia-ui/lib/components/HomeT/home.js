import React, { Component } from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './home.css';

class Home extends Component {
   
    render() {
        const classes = mergeClasses(defaultClasses, this.props.classes)
        return (
           <div className={classes.root}>
               Home</div>
        );
    }
}

export default Home;
