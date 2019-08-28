import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classify from '../../classify';
import defaultClasses from './footer.css';
import storeConfigDataQuery from '../../queries/getStoreConfigData.graphql';
import { Query } from '@magento/venia-drivers';
import * as icons from '../Fonts/styles.css';
import About from './About';
import GeneralComponent from './GeneralComponent';
import MenuBottom from './MenuBottom/MenuBottom';
import GeneralComponent2 from './GeneralComponent2';
const cartImage = 'http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/payment.gif'
const KeyFeaturesdata = [
    { id: 1, title: 'Unlimited colors, hundreds of customizable elements' },
    { id: 2, title: 'Customizable responsive layout based on fluid grid' },
    { id: 3, title: '50+ placeholders to display custom content' },
    { id: 4, title: 'Create your custom sub-themes (variants)' },
];
const CompanyInfodata = [
    { id: 1, style: icons.icon_phone, title: 'Unlimited colors, hundreds of customizable elements' },
    { id: 2, style: icons.icon_mobile, title: 'Customizable responsive layout based on fluid grid' },
    { id: 3, style: icons.icon_envelope_o, title: '50+ placeholders to display custom content' },
    { id: 4, style: icons.icon_skype, title: 'Create your custom sub-themes (variants)' },
]
const ThemeFeaturesData = [
    { id: 1, name: 'Theme Features' },
    { id: 2, name: 'Typography' },
    { id: 3, name: 'Image Banners' },
    { id: 4, name: 'Font Icons' },
    { id: 5, name: 'Grid System' },
    { id: 6, name: 'Responsive Utilities' },
    { id: 7, name: 'Banner Slideshow' },
    { id: 8, name: 'Follow Us On Twitter' },
    { id: 9, name: 'Magento Themes' },
]
const Qusetionsdata = [
    { id: 1, name: 'Terms' },
    { id: 2, name: 'Conditions' },
    { id: 3, name: 'About us' },
    { id: 4, name: 'Example' }
];
const Shippingdata = [
    { id: 1, name: 'Delivery' },
    { id: 2, name: 'Track your order' },
    { id: 3, name: 'Buy gift cards' },
    { id: 4, name: 'Returns' }
];
const AboutUsdata = [
    { id: 1, name: 'Responsive' },
    { id: 2, name: 'Magento themes' },
    { id: 3, name: 'E-commerce' },
    { id: 4, name: 'The company' }
];
const News = [
    { id: 1, name: 'What`s new' },
    { id: 2, name: 'Products' },
    { id: 3, name: 'Magento template' },
    { id: 4, name: 'Our sites' }
];
const AdditionalInfoData = [
    { id: 1, style: icons.icon_heart_o, title: 'Friends Inc., 90 Bedford St New York, NY 041, USA' },
    { id: 2, style: icons.icon_heart_o, title: 'Follow us on our  Twitter account' },
]
class Footer extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            copyright: PropTypes.string,
            root: PropTypes.string,
            tile: PropTypes.string,
            tileBody: PropTypes.string,
            tileTitle: PropTypes.string
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footer_Container}>
                <div className={classes.footer_Container2}>
                    <div className={classes.footer_Container3}>
                        <br />
                        <div className={classes.corefooterContent}>
                            <div className={classes.footerContent}>
                                <div className={classes.footerMenu}>
                                    <About />
                                    <GeneralComponent2 data={ThemeFeaturesData} title='Theme Features' />
                                    <GeneralComponent data={KeyFeaturesdata} title='Key Features' />
                                    <GeneralComponent data={CompanyInfodata} title='Company Info' />
                                </div>
                                <div>
                                    <hr />
                                    <MenuBottom />
                                </div>
                            </div>
                            <div className={classes.secondaryFooter}>
                                <GeneralComponent2 data={Qusetionsdata} title='Questions?' />
                                <GeneralComponent2 data={Shippingdata} title='Shipping' />
                                <GeneralComponent2 data={AboutUsdata} title='About Us' />
                                <GeneralComponent2 data={News} title='News' />
                                <GeneralComponent data={AdditionalInfoData} title='Additional Info' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    <div className={classes.BottomContent}>
                        <div>
                            <small>
                                <Query query={storeConfigDataQuery}>
                                    {({ loading, error, data }) => {
                                        if (error) {
                                            return (
                                                <span className={classes.fetchError}>
                                                    Data Fetch Error:{' '}
                                                    <pre>{error.message}</pre>
                                                </span>
                                            );
                                        }
                                        if (loading) {
                                            return (
                                                <span className={classes.fetchingData}>
                                                    Fetching Data
                                    </span>
                                            );
                                        }

                                        return <span>{data.storeConfig.copyright}</span>;
                                    }}
                                </Query>
                            </small>

                        </div>
                        <div>
                            <img src={cartImage} alt='cartImage'/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default classify(defaultClasses)(Footer);
