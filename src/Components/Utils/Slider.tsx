import React from "react";

import Slider from "react-slick";
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/system";
import {useMediaQuery} from "@mui/material";



interface ISwiper {
    logos: string []
}

const Swipes : React.FC<ISwiper> = ({logos}) => {
    const isMobile : boolean = useMediaQuery('(max-width: 600px)');
    const checkSrc  = (src: string) : boolean => src.includes('startups')
    let settings = {
        className: "slideBox",
        dots: true,
        speed: 500,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: isMobile ? 3 : 5,
        adaptiveHeight: true,
        slidesToScroll: 1
    };
        return (
            <Slider
                {...settings}
            >
                {logos.map((logo, index) => (
                             <Box key={index} sx={{mt : checkSrc(logo) ? '20px' : '0px' }} >  <img  src={logo} style={{  width: '200px', height: '100%'}}/></Box>
                ))}
            </Slider>
        )
}

export  default Swipes