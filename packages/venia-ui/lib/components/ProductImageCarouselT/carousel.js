import React, { useCallback, useMemo, createRef } from 'react';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import { useCarousel } from '@magento/peregrine';
import { resourceUrl } from '@magento/venia-drivers';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from 'react-feather';
import { mergeClasses } from '../../classify';
import Thumbnail from './thumbnail';
import defaultClasses from './carousel.css';
import { transparentPlaceholder } from '../../shared/images';
import Icon from '../Icon';
import Image from '../Image';
import Button from '../Button';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import * as icons from '../Fonts/styles.css';


const DEFAULT_IMAGE_WIDTH = 640;
const DEFAULT_IMAGE_HEIGHT = 800;
const Carousel = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const [carouselState, carouselApi] = useCarousel(props.images);
    const { activeItemIndex, sortedImages } = carouselState;
    const { handlePrevious, handleNext, setActiveItemIndex } = carouselApi;


    const handleThumbnailClick = useCallback(
         index => {
            setActiveItemIndex(index);
        },
        [setActiveItemIndex]
    );

    const currentImage = sortedImages[activeItemIndex] || {};

    const src = currentImage.file
        ? resourceUrl(currentImage.file, {
            type: 'image-product',
            width: DEFAULT_IMAGE_WIDTH,
            height: DEFAULT_IMAGE_HEIGHT
        })
        : transparentPlaceholder;

    const alt = currentImage.label || 'image-product';

    const thumbnails = useMemo(
        () =>
            sortedImages.map((item, index) => (
                <Thumbnail
                    key={`${item.file}--${item.label}`}
                    item={item}
                    itemIndex={index}
                    isActive={activeItemIndex === index}
                    onClickHandler={handleThumbnailClick}
                />
            )),
        [activeItemIndex, handleThumbnailClick, sortedImages]
    );
    const ref = createRef();
    const next = () => {

        return ref.current.next(500)
    }
    const prev = () => {
        return ref.current.prev(500)
    }
    return (
        <div className={classes.root}>
            <div className={classes.imageContainer}>
                <Image
                    src={src}
                    alt={alt}
                    placeholder={transparentPlaceholder}
                />
            </div>
            <div className={classes.CarouselSlide}>
                <button
                    onClick={prev}
                    className={`${icons.icon_angle_left} ${classes.left}`}
                />
                <div className={classes.thumbnailList}>

                    <OwlCarousel
                        className="owl-theme"
                        items={4}
                        margin={10}
                        dots={false}
                        ref={ref}
                    >
                        {thumbnails}
                    </OwlCarousel>
                </div>
                <button
                    onClick={next}
                    className={` ${icons.icon_angle_right} ${classes.right}`}
                />
            </div>

        </div>
    );
};

Carousel.propTypes = {
    classes: shape({
        currentImage: string,
        imageContainer: string,
        nextButton: string,
        previousButton: string,
        root: string
    }),
    images: arrayOf(
        shape({
            label: string,
            position: number,
            disabled: bool,
            file: string.isRequired
        })
    ).isRequired
};

export default Carousel;
