import React, { useState } from "react";
import {
  RulerSvg,
  CatsHeartSvg,
  LibraSvg,
  PriceSvg,
  FriendsSvg,
  CatsPlusSvg,
  MinusSvg,
} from "../components/Svg.js";
import "../styles/about-cats-card.css";
import { Link } from "react-router-dom";
const ToggleIcon = ({ isVisible }) => {
  return isVisible ? <MinusSvg /> : <CatsPlusSvg />;
};

const AboutCatsCard = ({ data }) => {
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);
  const [dropdown4Visible, setDropdown4Visible] = useState(false);

  const closeAllDropdowns = () => {
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
    setDropdown4Visible(false);
  };

  const toggleDropdown = (dropdownNumber, title) => {
    closeAllDropdowns();
    switch (dropdownNumber) {
      case 1:
        setDropdown1Visible(!dropdown1Visible);
        break;
      case 2:
        setDropdown2Visible(!dropdown2Visible);
        break;
      case 3:
        setDropdown3Visible(!dropdown3Visible);
        break;
      case 4:
        setDropdown4Visible(!dropdown4Visible);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="cats-hero-section">
        <div className="container">
          <div className="cats-hero-text-container">
            <h1 className="cats-hero-title">{data.name}</h1>
            <p className="cats-hero-text">{data.description}</p>
            <Link className="cats-hero-link link">Go to the gallery</Link>
          </div>
          <div className="cats-hero-img-container">
            <img className="cats-hero-img" src={data.img} alt="cat" />
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <h2 className="features-title">Key features</h2>
          <ul className="features-list list">
            <li className="features-list-item">
              <RulerSvg />
              <h3 className="features-list-item-info">{data.length}</h3>
              <p className="features-list-item-text">cm</p>
            </li>
            <li className="features-list-item">
              <CatsHeartSvg />
              <h3 className="features-list-item-info">{data.years}</h3>
              <p className="features-list-item-text">years</p>
            </li>
            <li className="features-list-item">
              <LibraSvg />
              <h3 className="features-list-item-info">{data.weight}</h3>
              <p className="features-list-item-text">kg</p>
            </li>
            <li className="features-list-item">
              <PriceSvg />
              <h3 className="features-list-item-info">{data.cost}</h3>
              <p className="features-list-item-text">$</p>
            </li>
            <li className="features-list-item">
              <FriendsSvg />
              <h3 className="features-list-item-info">{data.rate}</h3>
              <p className="features-list-item-text">likes</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="dropdown-section">
        <div className="container">
          <ul className="dropdown-list list">
            {[1, 2, 3, 4].map((dropdownNumber) => (
              <li
              className={`dropdown-list-item ${
                (dropdownNumber === 1 && dropdown1Visible) ||
                (dropdownNumber === 2 && dropdown2Visible) ||
                (dropdownNumber === 3 && dropdown3Visible) ||
                (dropdownNumber === 4 && dropdown4Visible)
                  ? "active-dropdown"
                  : ""
              }`}
              key={dropdownNumber}
            >
              <div
                className="dropdown-header"
                onClick={() =>
                  toggleDropdown(
                    dropdownNumber,
                    dropdownNumber === 1
                      ? "Character"
                      : dropdownNumber === 2
                      ? "Diet"
                      : dropdownNumber === 3
                      ? "Health"
                      : "Care"
                  )
                }
              >
                <p className="dropdown-title">
                  {dropdownNumber === 1
                    ? "Character"
                    : dropdownNumber === 2
                    ? "Diet"
                    : dropdownNumber === 3
                    ? "Health"
                    : "Care"}
                </p>
                <ToggleIcon
                  isVisible={
                    dropdownNumber === 1
                      ? dropdown1Visible
                      : dropdownNumber === 2
                      ? dropdown2Visible
                      : dropdownNumber === 3
                      ? dropdown3Visible
                      : dropdown4Visible
                  }
                />
              </div>
                {dropdownNumber === 1 && dropdown1Visible && (
                  <div className="dropdown-content">
                    <p className="dropdown-text">
                      Some people consider British Shorthairs as the 'gentle
                      giants' of the cat world. They are affectionate and form
                      strong bonds with both humans and other animals. British
                      Shorthairs don't demand constant attention from humans.
                    </p>
                  </div>
                )}
                {dropdownNumber === 2 && dropdown2Visible && (
                  <div className="dropdown-content">
                    <p className="dropdown-text">
                      Some people consider British Shorthairs as the 'gentle
                      giants' of the cat world. They are affectionate and form
                      strong bonds with both humans and other animals. British
                      Shorthairs don't demand constant attention from humans.
                    </p>
                  </div>
                )}
                {dropdownNumber === 3 && dropdown3Visible && (
                  <div className="dropdown-content">
                    <p className="dropdown-text">
                      Some people consider British Shorthairs as the 'gentle
                      giants' of the cat world. They are affectionate and form
                      strong bonds with both humans and other animals. British
                      Shorthairs don't demand constant attention from humans.
                    </p>
                  </div>
                )}
                {dropdownNumber === 4 && dropdown4Visible && (
                  <div className="dropdown-content">
                    <p className="dropdown-text">
                      Some people consider British Shorthairs as the 'gentle
                      giants' of the cat world. They are affectionate and form
                      strong bonds with both humans and other animals. British
                      Shorthairs don't demand constant attention from humans.
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutCatsCard;
