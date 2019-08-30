import React, { Suspense } from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather';

import Icon from '../Icon';
import Logo from '../LogoT';
import { Link, resourceUrl, Route } from '@magento/venia-drivers';

import CartTrigger from './cartTrigger';
import NavTrigger from './navTrigger';
import SearchTrigger from './searchTrigger';
import OnlineIndicator from '../OnlineIndicator';
import SearchBar from '../SearchBarT';
import { mergeClasses } from '../../classify';
import defaultClasses from './header.css';
import MenuList from './MenuList';
import SubHeader from './SubHeader';
import MiniCart from '../MiniCartT';
import CartContent from './CartContent';
import SignInTrigger from './SignInTrigger';


// const SearchBar = React.lazy(() => import('../SearchBar'));

const Header = props => {
    const {
        cart,
        getCartDetails,
        hasBeenOffline,
        isOnline,
        searchOpen,
        toggleCart,
        toggleSearch
    } = props;

    const cartTriggerProps = { cart, getCartDetails, toggleCart };
    const classes = mergeClasses(defaultClasses, props.classes);
    const rootClass = searchOpen ? classes.open : classes.closed;
    const searchIcon = <Icon src={SearchIcon} />;
    const suspenseFallback = (
        <div className={classes.searchFallback}>
            <div className={classes.input}>
                <div className={classes.loader} />
            </div>
        </div>
    );

    return (
        <header className={rootClass}>
            <div>
                <SubHeader />
            </div>
            <div className={classes.mainHeader}>
                <div>
                    <Link to={resourceUrl('/')}>
                        <Logo classes={{ logo: classes.logo }} />
                    </Link>
                </div>
                <div className={classes.searchbar}>
                    <SearchBar
                        history={history}
                        isOpen={true}
                        location={location}
                    />
                </div>
                <div className={classes.menuList}>
                    <MenuList
                        menu1='Account'
                        menu2='Wishlist'
                        menu3={<SignInTrigger />}
                    />
                    <div className={classes.CartTrigger}>
                        <div className={classes.cartIcon}>
                            <CartTrigger {...cartTriggerProps} />
                        </div>

                        <div className={classes.miniCart}>
                            <MiniCart isOpen={true} />
                        </div>
                    </div>
                </div>
                <Suspense fallback={searchOpen ? suspenseFallback : null}>
                    <Route
                        render={({ history, location }) => (
                            <SearchBar
                                isOpen={searchOpen}
                                history={history}
                                location={location}
                            />
                        )}
                    />
                </Suspense>

                <div className={classes.navDesktop}>
                        {/* <Navigation /> */}
                </div>
            </div>

        </header>
    );
};

Header.propTypes = {
    cart: object,
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string
    }),
    getCartDetails: func,
    searchOpen: bool,
    toggleCart: func,
    toggleSearch: func.isRequired
};

export default Header;
