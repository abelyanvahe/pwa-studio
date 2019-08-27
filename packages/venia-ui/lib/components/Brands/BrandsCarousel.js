import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class BrandCarousel extends React.Component {
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
        const { brands } = this.props;
        return (
            <div>
                <OwlCarousel
                    className="owl-theme owl-nav"
                    loop
                    margin={10}
                    items={5}
                    next
                    prev
                    ref={this.ref}
                >
                    {
                        brands.map(item =>
                            <div key={item.id}  style={{width:'50%'}}>
                                <img src={item.logo} alt='brands' />
                            </div>
                        )
                    }
                </OwlCarousel>
            </div>
        );
    }
}

export default BrandCarousel;