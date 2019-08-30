


import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import GalleryItem from '../GalleryT/item';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    next = () => {
        return this.ref.current.next()
    }
    prev = () => {
        return this.ref.current.prev()
    }
    render() {
        const {
            products,
            item,
            autoplay,
            autoplayTimeout,
        } = this.props;
        return (
            <OwlCarousel
                className="owl-theme owl-nav"
                loop
                items={item}
                margin={10}
                ref={this.ref}
                autoplay={autoplay}
                autoplayTimeout={autoplayTimeout}
                rewind
                slideBy='3'
            >
                {
                    products.map(item =>
                        <div key={item.id} >
                            <GalleryItem
                                item={item}
                            />
                        </div>
                    )
                }
            </OwlCarousel>
        );
    }
}

export default Carousel;
