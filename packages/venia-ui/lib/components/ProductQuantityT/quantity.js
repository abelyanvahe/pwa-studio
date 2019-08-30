import React, { Component } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import classify from '../../classify';
import Select from '../Select';
import mockData from './mockData';
import defaultClasses from './quantity.css';

class Quantity extends Component {
    static propTypes = {
        classes: shape({
            root: string
        }),
        items: arrayOf(
            shape({
                value: number
            })
        )
    };

    static defaultProps = {
        selectLabel: "product's quantity"
    };

    render() {
        const { classes, selectLabel, ...restProps } = this.props;
console.log('restProps',restProps)
        return (
            <div className={classes.root}>
               <div >
                   {restProps.initialValue}
               </div>
            </div>
        );
    }
}

export default classify(defaultClasses)(Quantity);
