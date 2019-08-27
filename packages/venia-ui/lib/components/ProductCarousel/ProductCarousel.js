import React, { useEffect, createRef } from 'react';
import Carousel from './Carousel';
import { useQuery } from '@magento/peregrine';
import productQuery from '../../queries/getProducts.graphql';
import { fullPageLoadingIndicator } from '../LoadingIndicator';
import CarouselHeader from './CarouselHeader';
const ProductCarousel = props => {
    const { 
            id, 
            pageSize, 
            currentPage, 
            item , 
            title, 
            autoplay, 
            autoplayTimeout, 
        } = props;
    const [queryResult, queryApi] = useQuery(productQuery);
    const { data, error, loading } = queryResult;
    const { runQuery, setLoading } = queryApi;


    useEffect(() => {
        setLoading(true);
        runQuery({
            variables: {
                currentPage: Number(currentPage),
                id: Number(id),
                idString: String(id),
                onServer: false,
                pageSize: Number(pageSize)
            }
        });

        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }, [currentPage, id, pageSize, runQuery, setLoading]);

    if (error && !loading) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Data Fetch Error</div>;
    }
    if (!data && loading) {
        return fullPageLoadingIndicator
    }
    const ref = createRef();
    console.log(data)
    return data && typeof (data.products.items) != 'undefined' ? (
        <>
            <CarouselHeader
                title={title}
                next = {() => ref.current.next()} 
                prev = {() => ref.current.prev()}
            />
            <Carousel
                products={data.products.items}
                ref={ref}
                item={item}
                autoplay={autoplay}
                autoplayTimeout={autoplayTimeout}
            />
        </>
    ) : fullPageLoadingIndicator;
}

export default ProductCarousel;

