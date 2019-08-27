import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './CartContent.css';
import CartTrigger from './cartTrigger';
import MiniCart from '../MiniCartT';


const CartContent = props => {
    const classes = mergeClasses(defaultClasses, props.classes)
    return (
        <div className={classes.root}>
            <div className={classes.Cart}>
                <CartTrigger />
            </div>
            <div className={classes.miniCart}>
                <MiniCart isOpen={true}/>
            </div>
        </div>
    );
}
export default CartContent;