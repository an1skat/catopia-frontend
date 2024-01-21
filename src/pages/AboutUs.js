import "../styles/about-us.css";
import "../styles/main.css";
import {
  TwitterSvg,
  FacebookSvg,
  InstagramSvg,
  LampSvg,
  CareSvg,
  PeopleGroupSvg,
  HeartsSvg,
  RelaxSvg,
} from "../components/Svg.js";
import VarvaraCat from "../img/varvara-cat.png";
import AntskatCat from "../img/antskat-cat.png";
import FooterImg from "../img/footer-img.png";
const AboutUs = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">About us</h1>
          <p className="hero-text">
            Catopia is a project, an idea that emerged not long <br /> ago but
            has already managed to settle in our hearts. <br /> We invite you to
            get to know us better!
          </p>
        </div>
      </section>
      <section className="why-catopia-section">
        <div className="container">
          <h2 className="why-catopia-title">Why Catopia?</h2>
          <ul className="why-catopia-list list">
            <li className="why-catopia-list-item">
              <div className="why-catopia-list-svg-container">
                <LampSvg />
              </div>
              <h3 className="why-catopia-list-title">Ready</h3>
              <p className="why-catopia-list-text">for the new</p>
            </li>
            <li className="why-catopia-list-item">
              <div className="why-catopia-list-svg-container">
                <CareSvg />
              </div>
              <h3 className="why-catopia-list-title">Care</h3>
              <p className="why-catopia-list-text">about users</p>
            </li>
            <li className="why-catopia-list-item">
              <div className="why-catopia-list-svg-container">
                <PeopleGroupSvg />
              </div>
              <h3 className="why-catopia-list-title">Open</h3>
              <p className="why-catopia-list-text">to partnership</p>
            </li>
            <li className="why-catopia-list-item">
              <div className="why-catopia-list-svg-container">
                <HeartsSvg />
              </div>
              <h3 className="why-catopia-list-title">Love</h3>
              <p className="why-catopia-list-text">to cats!</p>
            </li>
            <li className="why-catopia-list-item">
              <div className="why-catopia-list-svg-container">
                <RelaxSvg />
              </div>
              <h3 className="why-catopia-list-title">Relax</h3>
              <p className="why-catopia-list-text">creating</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="our-team-section">
        <div className="container">
          <h2 className="our-team-title">Meet the team</h2>
          <ul className="our-team-list list">
            <li className="our-team-list-item">
              <img
                className="our-team-list-img"
                src={AntskatCat}
                alt="black cat"
                width={301}
                height={328.085}
              />
              <h3 className="our-team-list-name">Antskat</h3>
              <p className="our-team-list-profession">Fullstack</p>
            </li>
            <li className="our-team-list-item">
              <img
                className="our-team-list-img"
                src={VarvaraCat}
                alt="ginger cat"
                width={180}
                height={328.085}
              />
              <h3 className="our-team-list-name">Varvara</h3>
              <p className="our-team-list-profession">Designer</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="join-us-section">
        <div className="container">
          <h2 className="join-us-title">Join us</h2>
          <p className="join-us-subtitle">We are on social media</p>
          <ul className="join-us-list list">
            <li className="join-us-list-item">
              <a className="join-us-link link" href="#">
                <TwitterSvg />
                <p className="join-us-list-text">@catopiacats</p>
              </a>
            </li>
            <li className="join-us-list-item">
              <a className="join-us-link link" href="#">
                <FacebookSvg />
                <p className="join-us-list-text">@catopiacats</p>
              </a>
            </li>
            <li className="join-us-list-item">
              <a className="join-us-link link" href="#">
                <InstagramSvg />
                <p className="join-us-list-text">@catopiacats</p>
              </a>
            </li>
          </ul>
          <p className="join-us-supertitle">
            If you have any questions or proposals for collaboration, please
          </p>
          <p className="join-link link" href="#">
            GET IN TOUCH WITH US
          </p>
        </div>
      </section>
      <section className="footer-section">
        <div className="container">
          <div className="footer-img-container">
            <img
              className="footer-img"
              src={FooterImg}
              alt="image with cats and our logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
