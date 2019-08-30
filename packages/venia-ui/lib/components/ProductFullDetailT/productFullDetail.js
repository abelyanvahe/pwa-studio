import React, { Suspense, useCallback, useState } from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import { Form } from 'informed';
import { Price } from '@magento/peregrine';

import defaultClasses from './productFullDetail.css';
import { mergeClasses } from '../../classify';

import Button from '../Button';
import { fullPageLoadingIndicator } from '../LoadingIndicator';
import Carousel from '../ProductImageCarouselT';
import Quantity from '../ProductQuantityT';
import RichText from '../RichText';
import Review from '../Review';
import appendOptionsToPayload from '../../util/appendOptionsToPayload';
import findMatchingVariant from '../../util/findMatchingProductVariant';
import isProductConfigurable from '../../util/isProductConfigurable';
import * as icons from '../Fonts/styles.css'
import Tab from '../Tab';
const Options = React.lazy(() => import('../ProductOptions'));

const INITIAL_OPTION_CODES = new Map();
const INITIAL_OPTION_SELECTIONS = new Map();
const INITIAL_QUANTITY = 1;

const deriveOptionCodesFromProduct = product => {
    // If this is a simple product it has no option codes.
    if (!isProductConfigurable(product)) {
        return INITIAL_OPTION_CODES;
    }

    // Initialize optionCodes based on the options of the product.
    const initialOptionCodes = new Map();
    for (const {
        attribute_id,
        attribute_code
    } of product.configurable_options) {
        initialOptionCodes.set(attribute_id, attribute_code);
    }

    return initialOptionCodes;
};

const getIsMissingOptions = (product, optionSelections) => {
    // Non-configurable products can't be missing options.
    if (!isProductConfigurable(product)) {
        return false;
    }

    // Configurable products are missing options if we have fewer
    // option selections than the product has options.
    const { configurable_options } = product;
    const numProductOptions = configurable_options.length;
    const numProductSelections = optionSelections.size;

    return numProductSelections < numProductOptions;
};

const getMediaGalleryEntries = (product, optionCodes, optionSelections) => {
    let value = [];

    const { media_gallery_entries, variants } = product;
    const isConfigurable = isProductConfigurable(product);
    const optionsSelected = optionSelections.size > 0;

    if (!isConfigurable || !optionsSelected) {
        value = media_gallery_entries;
    } else {
        const item = findMatchingVariant({
            optionCodes,
            optionSelections,
            variants
        });

        value = item
            ? [...item.product.media_gallery_entries, ...media_gallery_entries]
            : media_gallery_entries;
    }

    const key = value.reduce((fullKey, entry) => {
        return `${fullKey},${entry.file}`;
    }, '');

    return { key, value };
};

const ProductFullDetail = props => {
    // Props.
    const { addToCart, isAddingItem, product } = props;
    // State.
    const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
    const [optionSelections, setOptionSelections] = useState(
        INITIAL_OPTION_SELECTIONS
    );
    const derivedOptionCodes = deriveOptionCodesFromProduct(product);
    const [optionCodes] = useState(derivedOptionCodes);

    // Members.
    const { amount: productPrice } = product.price.regularPrice;
    const classes = mergeClasses(defaultClasses, props.classes);
    const isMissingOptions = getIsMissingOptions(product, optionSelections);
    const mediaGalleryEntries = getMediaGalleryEntries(
        product,
        optionCodes,
        optionSelections
    );
    const addQuantity = () => {
        return (
            setQuantity(quantity + 1)
        )
    }
    const subtractQuantity = () => {
        if (quantity <= 0) {
            return
        }
        return setQuantity(quantity - 1);

    }
    // Event handlers.
    const handleAddToCart = useCallback(() => {
        const payload = {
            item: product,
            productType: product.__typename,
            quantity
        };

        if (isProductConfigurable(product)) {
            appendOptionsToPayload(payload, optionSelections, optionCodes);
        }

        addToCart(payload);
    }, [addToCart, optionCodes, optionSelections, product, quantity]);

    const handleSelectionChange = useCallback(
        (optionId, selection) => {
            // We must create a new Map here so that React knows that the value
            // of optionSelections has changed.
            const newOptionSelections = new Map([...optionSelections]);
            newOptionSelections.set(optionId, Array.from(selection).pop());
            setOptionSelections(newOptionSelections);
        },
        [optionSelections]
    );
    console.log('product', product);
    const { name, reviews_count, rating_summary } = product;
    return (
        <div className={classes.root}>
            <Form className={classes.form}>
                <section className={classes.imageCarousel}>
                    <Carousel
                        images={mediaGalleryEntries.value}
                        key={mediaGalleryEntries.key}
                    />
                </section>
                <section className={classes.content}>
                    <h1>{name}</h1>
                    <div className={classes.Review}>
                        <section >
                            <Review
                                review={reviews_count}
                                ratingSummary={rating_summary}
                            />
                        </section>
                        <span>|</span>
                        <section>
                            Add Your Review
                   </section>
                    </div>
                    <div className={classes.text}>
                        <p>
                            Custom Variants and Options let you create product customization options and fields quickly and easily. Any product can have custom options.
                    </p>
                    </div>
                    <hr />
                    <div className={classes.price}>
                        <Price
                            currencyCode={productPrice.currency}
                            value={productPrice.value}
                        />
                    </div>
                    <section className={classes.options}>
                        <Suspense fallback={fullPageLoadingIndicator}>
                            <Options
                                onSelectionChange={handleSelectionChange}
                                product={product}
                            />
                        </Suspense>
                    </section>
                    <section className={classes.cartActions}>
                        <section>
                            <button
                                className={classes.addToCartButton}
                                onClick={handleAddToCart}
                                disabled={isAddingItem || isMissingOptions}
                            >
                                Add to Cart
                    </button>
                        </section>
                        <section className={classes.quantity}>
                            <h2 className={classes.quantityTitle}>Qty</h2>
                            <section className={classes.quantityValue}>
                                <Quantity initialValue={quantity} onValueChange={setQuantity} />
                                <div className={classes.buttonGroup}>
                                    <button onClick={addQuantity} className={classes.up}>
                                        <span className={` ${icons.icon_angle_up} `} />
                                    </button>
                                    <button onClick={subtractQuantity} className={classes.down}>
                                        <span className={` ${icons.icon_angle_down}`} />
                                    </button>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            </Form>
            <div >
                <Tab />
            </div>
        </div>
    );
};

ProductFullDetail.propTypes = {
    addToCart: func.isRequired,
    classes: shape({
        cartActions: string,
        description: string,
        descriptionTitle: string,
        details: string,
        detailsTitle: string,
        imageCarousel: string,
        options: string,
        productName: string,
        productPrice: string,
        quantity: string,
        quantityTitle: string,
        root: string,
        title: string
    }),
    isAddingItem: bool,
    product: shape({
        __typename: string,
        id: number,
        sku: string.isRequired,
        price: shape({
            regularPrice: shape({
                amount: shape({
                    currency: string.isRequired,
                    value: number.isRequired
                })
            }).isRequired
        }).isRequired,
        media_gallery_entries: arrayOf(
            shape({
                label: string,
                position: number,
                disabled: bool,
                file: string.isRequired
            })
        ),
        description: string
    }).isRequired
};

export default ProductFullDetail;
