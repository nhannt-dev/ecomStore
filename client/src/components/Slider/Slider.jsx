import React from 'react'
import { WrapperSliderStyle } from './style'
import { Image } from 'antd'

const Slider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    }
    return (
        <WrapperSliderStyle {...settings}>
            {images.map(el => (
                <Image key={el} src={el} preview={false} width={'100%'} />
            ))}
        </WrapperSliderStyle>
    )
}

export default Slider