import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/swiper.css";
import "../styles/about-cats.css";
import CatCard from "../components/CatCard";
import { catData } from "../components/CatsInfo";

const AboutCats = () => {
 
  const slidesData = [
    catData.slice(0, 9),
    catData.slice(9, 18),
    catData.slice(18, 27),
  ];

  return (
    <>
      <section className="about-hero-section">
        <div className="container">
          <h1 className="hero-title">Everything about cats</h1>
          <p className="hero-text">
            Here you will find information about cat breeds and their
            characteristics. Many and even more useful and interesting facts
            await you!
          </p>
        </div>
      </section>
      <section className="swiper-section">
        <div className="container">
          <h2 className="swiper-title">Cat breed library</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="swiper"
          >
            {slidesData.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <ul className="swiper-list list">
                  {slide.map((cat) => (
                    <CatCard key={cat.id} data={cat} />
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutCats;
