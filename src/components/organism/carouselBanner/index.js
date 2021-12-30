import React, { useEffect } from 'react'
import { Banner } from '../../molecules'
import Carousel from 'react-material-ui-carousel'
import { getDataBanner } from '../../../config/redux/actions'
import { useDispatch,useSelector } from 'react-redux'

const CarouselBanner = () => {
    const dispatch = useDispatch();
    const {dataBanner,isLoadingBanner} = useSelector(state => state.bannerReducers);
    useEffect(() => {
        dispatch(getDataBanner());
    }, [dispatch])
    return (
        <div>
            {isLoadingBanner === true ? <Banner image={null}/> : 
            <Carousel swipe={false}>
                {dataBanner.map((banner,i)=><Banner key={i} image={banner.url_mobile}/>)}
            </Carousel>}
        </div>
    )
}

export default CarouselBanner;
