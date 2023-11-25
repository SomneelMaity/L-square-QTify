import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import styles from "./Carousel.module.css"
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);
  return <></>;
};


function Carousel({ data, renderComponent }) {
    return (
      <div className={styles.wrapper}>
        <Swiper
          style={{ padding: "0px 20px" }}
          initialSlide={0}
          module={[Navigation]}
          slidePerView={"auto"}
          spaceBetween={40}
          allowTouchMove
        >
          <Controls data={data} />
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
          {data.map((item) => (
            <SwiperSlide>{renderComponent(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

export default Carousel;
