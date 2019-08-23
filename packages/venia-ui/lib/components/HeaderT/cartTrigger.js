import React, { useEffect } from 'react';
import { func, number, shape, string } from 'prop-types';
import { ShoppingCart as ShoppingCartIcon } from 'react-feather';

import Icon from '../Icon';
import CartCounter from './cartCounter';

import { mergeClasses } from '../../classify';
import defaultClasses from './cartTrigger.css';
import * as icons from '../Fonts/styles.css'
const CART_ICON_FILLED = (
    <Icon
        src={ShoppingCartIcon}
        attrs={{
            fill: 'rgb(var(--venia-text))',
            stroke: 'rgb(var(--venia-text))'
        }}
    />
);
const CART_ICON_EMPTY = (
    <Icon
        src={ShoppingCartIcon}
        attrs={{
            stroke: 'rgb(var(--venia-text))'
        }}
    />
);

const CartTrigger = props => {
    const { cart, getCartDetails, toggleCart } = props;
    const { details: cartDetails } = cart;
    const { items_qty: numItems } = cartDetails;

    const classes = mergeClasses(defaultClasses, props.classes);

    useEffect(() => {
        getCartDetails();
    }, [getCartDetails]);

    const cartIcon = numItems > 0 ? CART_ICON_FILLED : CART_ICON_EMPTY;
    const buttonAriaLabel = `Toggle mini cart. You have ${numItems} items in your cart.`;

    return (
        <div
            className={classes.root}
        // onClick={toggleCart}
        >
            <span className={icons.icon_shopping_cart}>
                <CartCounter numItems={numItems} />
            </span>
            <span> Cart</span>
            <span className={icons.icon_down_open_mini} />
        </div>
    );
};

CartTrigger.propTypes = {
    cart: shape({
        details: shape({
            items_qty: number
        }).isRequired
    }).isRequired,
    classes: shape({
        root: string
    }),
    getCartDetails: func.isRequired,
    toggleCart: func
};

export default CartTrigger;
