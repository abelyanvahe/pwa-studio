import React, { Component } from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './home.css';
import ProductCarousel from '../ProductCarousel';
import Block from '../StaticBlock';
import Brands from '../Brands';
class Home extends Component {

    render() {
        const classes = mergeClasses(defaultClasses, this.props.classes)
        return (
            <div className={classes.root}>
                <div>
                    <Block />
                </div>

                <div>
                    <ProductCarousel
                        id={6}
                        pageSize={6}
                        currentPage={1}
                        item={6}
                        title='Our Featured Products'
                        autoplay={false}
                        autoplayTimeout={null}
                        rewind={false}
                    />
                </div>

                <div className={classes.carousels}>
                    <div>
                        <ProductCarousel
                            id={6}
                            pageSize={9}
                            currentPage={1}
                            item={3}
                            title='Recommended products'
                            autoplay={true}
                            autoplayTimeout={3000}
                        />
                    </div>
                    <div>
                        <ProductCarousel
                            id={4}
                            pageSize={3}
                            currentPage={1}
                            item={3}
                            title='Recommended bags '
                            autoplay={true}
                            autoplayTimeout={3000}
                        />
                    </div>
                </div>
                <div>
                    <Brands 
                        
                    />
                </div>
            </div>
        );
    }
}

export default Home;
