import React from "react";
import PropTypes from "prop-types";
import { Image } from "astro:assets";
import { urlForImage } from "../lib/urlForImage";
import { getAllsliderImages } from "../lib/api";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  KayboardNavigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-fade";

const headerImages = await getAllsliderImages();

const swiper = document.querySelector(".swiper").swiper;

function HeaderSlider(props) {
  return (
    <swiper-container>
      slidesPerView={1}
      <div className="swiper">
        <div
          class="swiper-wrapper"
          data-swiper-autoplay="2000"
          data-swiper-crossFade="true"
        >
          {headerImages.map((headerImage) => {
            return (
              <SwiperSlide>
                <Image
                  src={urlForImage(headerImage.image)}
                  alt={headerImage.alt}
                />
                ;
              </SwiperSlide>
            );
          })}
        </div>
      </div>
    </swiper-container>
  );
}

HeaderSlider.propTypes = {
  image: propTypes.string,
  alt: propTypes.string,
};

export default HeaderSlider;
