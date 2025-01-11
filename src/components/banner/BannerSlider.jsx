import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { BannerSlider1, IphoneBanner } from "../../assets/icon";
import { styled } from "@mui/system";

const imageSets = [
  {
    background: BannerSlider1,
    image: IphoneBanner,
  },
  {
    video:
      "https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large_2x.mp4",
  },
  {
    video:
      "https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large_2x.mp4",
  },
  {
    video:
      "https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4",
  },
];

const BannerSlider = () => {
  const [currentSet, setCurrentSet] = useState(imageSets[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % imageSets.length;
      setActiveIndex(nextIndex);
      setCurrentSet(imageSets[nextIndex]);
    }, 2000);
  };

  const handleVideoEnd = () => {
    setActiveIndex(0);
    setCurrentSet(imageSets[0]);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setCurrentSet(imageSets[swiper.activeIndex]);
        }}
        className="mySwiper"
      >
        {imageSets.map((set, index) => (
          <SwiperSlide key={index}>
            <StyledBox
              style={{
                backgroundImage: set.video ? "none" : `url(${set.background})`,
              }}
            >
              {!set.video && set.image && (
                <StyledImage src={set.image} alt="Iphone" />
              )}
              {set.video && (
                <StyledVideo
                  ref={videoRef}
                  autoPlay
                  loop={false}
                  muted
                  onEnded={handleVideoEnd}
                >
                  <source src={set.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </StyledVideo>
              )}
            </StyledBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;

const StyledBox = styled("div")(() => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "500px",
  position: "relative",
}));

const StyledImage = styled("img")(() => ({
  position: "absolute",
  top: "30px",
  right: "480px",
  width: "243px",
  height: "470px",
  zIndex: 1,
}));

const StyledVideo = styled("video")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
}));
