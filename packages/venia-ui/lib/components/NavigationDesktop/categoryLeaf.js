import React, { Component } from 'react';
import { Link } from '@magento/venia-drivers';
import { func, shape, string } from 'prop-types';

import defaultClasses from './categoryLeaf.css';
const urlSuffix = '.html';

class Leaf extends Component {
    static propTypes = {
     
        name: string.isRequired,
        urlPath: string.isRequired,
        onNavigate: func
    };

    render() {
        const { name, urlPath } = this.props;

        return (
            <Link
                className={defaultClasses.root}
                to={`/${urlPath}${urlSuffix}`}
            >
                <span className={defaultClasses.text}>
                    {name}  
                </span>
            </Link>
        );
    }
}

export default Leaf;
