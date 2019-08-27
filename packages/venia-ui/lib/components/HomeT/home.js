import React, { Component } from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './home.css';
import ProductCarousel from '../ProductCarousel';
class Home extends Component {
   
    render() {
        const classes = mergeClasses(defaultClasses, this.props.classes)
        return (
           <div className={classes.root}>
               <ProductCarousel />
               </div>
        );
    }
}

export default Home;
