import React from "react";
import PropTypes from "prop-types";
import { Image } from "astro:assets";
import { getAllsliderImages } from "../lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import {KayboardNavigation, Controller, A11y} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-fade";



const headerImages = await getAllsliderImages();

function HeaderSlider(props) {
  return (
    <Swiper>
      slidesPerView={1}
      onSwiper={(swiper)=> }
      <div class="slider-container" data-swiper-autoplay="2000" 
      data-swiper-crossFade='true' 
      data-swiper-autoplay="true">
        {headerImages.map((headerImage) => {
          return (
            <SwiperSlide>
              <Image src={headerImage.image} alt={headerImage.alt} />;
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
}

HeaderSlider.propTypes = {
  image: propTypes.string,
  alt: propTypes.string,
};

<style></style>;

export default HeaderSlider;
