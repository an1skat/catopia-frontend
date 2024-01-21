import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/swiper.css";
import "../styles/about-cats.css";
import CatCard from "../components/CatCard";
import BritishShorthairCat from "../img/british-shortcair-cat.png";
import Sphynx from "../img/sphynx.png";
import SiameseCat from "../img/siamese-cat.png";
import AbyssinianCat from "../img/abyssinian-cat.png";
import MunchkinCat from "../img/munchkin-cat.png";
import BurmeseCat from "../img/burmese-cat.png";
import AmericanCurlCat from "../img/american-curl-cat.png";
import ExoticShortcairCat from "../img/exotic-shortcair-cat.png";
import TabbyCat from "../img/tabby-cat.png";
import SomaliCat from "../img/somali-cat.png";
import RagdollCat from "../img/ragdoll-cat.png";
import CornishRex from "../img/cornish-rex.png";
import MaineCoon from "../img/maine-coon-cat.png";
import PersianCat from "../img/persian-cat.png";
import ChartreuxCat from "../img/chartreux-cat.png";
import BombayCat from "../img/bombay-cat.png";
import BengalCat from "../img/bengal-cat.png";
import OrientalCat from "../img/oriental-cat.png";
import NorwegianForestCat from "../img/norwegian-forest-cat.png";
import BurmilaCat from "../img/burmila-cat.png";
import BirmanCat from "../img/birman-cat.png";
import AustralianCat from "../img/australian-mist-cat.png";
import ScottishCat from "../img/scottish-fold-cat.png";
import SiberianCat from "../img/siberian-cat.png";
import NebelungCat from "../img/nebelung-cat.png";
import DomesticShortcairCat from "../img/domestic-shorthair-cat.png";
import SingapuraCat from "../img/singapura-cat.png";

const AboutCats = () => {
  const catData = [
    { id: 1, name: "British Shorthair Cat", img: BritishShorthairCat },
    { id: 2, name: "Sphynx", img: Sphynx },
    { id: 3, name: "Siamese Сat", img: SiameseCat },
    { id: 4, name: "Abyssinian Сat", img: AbyssinianCat },
    { id: 5, name: "Munchkin Сat", img: MunchkinCat },
    { id: 6, name: "Burmese Сat", img: BurmeseCat },
    { id: 7, name: "American Curl", img: AmericanCurlCat },
    { id: 8, name: "Exotic Shorthair", img: ExoticShortcairCat },
    { id: 9, name: "Tabby Cat", img: TabbyCat },
    { id: 10, name: "Somali cat", img: SomaliCat },
    { id: 11, name: "Ragdoll", img: RagdollCat },
    { id: 12, name: "Cornish Rex", img: CornishRex },
    { id: 13, name: "Maine Coon", img: MaineCoon },
    { id: 14, name: "Persian Сat", img: PersianCat },
    { id: 15, name: "Charteux", img: ChartreuxCat },
    { id: 16, name: "Bombany Cat", img: BombayCat },
    { id: 17, name: "Bengal Cat", img: BengalCat },
    { id: 18, name: "Oriental Cat", img: OrientalCat },
    { id: 19, name: "Norwegian Forest Cat", img: NorwegianForestCat },
    { id: 20, name: "Burmila Cat", img: BurmilaCat },
    { id: 21, name: "Birman Сat", img: BirmanCat },
    { id: 22, name: "Australian Mist", img: AustralianCat },
    { id: 23, name: "Scottish Fold Сat", img: ScottishCat },
    { id: 24, name: "Siberian Сat", img: SiberianCat },
    { id: 25, name: "Nebelung", img: NebelungCat },
    { id: 26, name: "Domestic Shorthair Cat", img: DomesticShortcairCat },
    { id: 27, name: "Singapura", img: SingapuraCat },
  ];
 
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
