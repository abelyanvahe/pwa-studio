import React, { createRef} from 'react';
import { Query } from '@magento/venia-drivers';
import getBrands from '../../queries/getBrands.graphql';
import { fullPageLoadingIndicator } from '../LoadingIndicator'
import BrandCarousel from './BrandsCarousel';
import CarouselHeader from '../ProductCarousel/CarouselHeader';


const Brands = () => {
    const ref = createRef();

        return(
            <div>
               <Query query={getBrands}>
                    {({ loading, error, data}) => {
                        if(error) return <div>Data fetch error ...</div>
                        if(loading) return fullPageLoadingIndicator;
                        const brands = data.brands;
                        return(
                            <div>
                                <div>
                                    <CarouselHeader 
                                        title='Our Brands'
                                        next = {() => ref.current.next()} 
                                        prev = {() => ref.current.prev()}
                                    />
                                </div>
                                <BrandCarousel 
                                    brands = {brands}
                                    ref={ref}
                                />  
                            </div>
                        )
                    }}
               </Query>
            </div>
        );
    }


export default Brands;