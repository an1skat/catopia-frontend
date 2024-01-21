import { NavLink } from "react-router-dom";
import { TwitterSvg, FacebookSvg, InstagramSvg, LogoSvg } from "../components/Svg.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list list">
          <li className="footer-list-item">
            <NavLink to="/home" className="link footer-logo">
              cat
              <span className="footer-logo-span">
                <LogoSvg />
              </span>
              pia
            </NavLink>
            <p className="logo-text">Welcome to world of cats</p>
          </li>
          <li className="footer-list-item">
            <h3 className="footer-list-title">Contacts</h3>
            <address className="footer-contacts">
              <a
                className="footer-contacts-link link"
                href="mailto:catopia@gmail.com"
              >
                catopia@gmail.com
              </a>
              <a className="footer-contacts-link link" href="tel:+380123456789">
                +380123456789
              </a>
              <a className="footer-contacts-link link" href="tel:+380987654321">
                +380987654321
              </a>
            </address>
          </li>
          <li className="footer-list-item">
            <h3 className="footer-list-title">Pages</h3>
            <ul className="footer-pages-list list">
              <li className="footer-pages-list-item">
                <NavLink to="/home" className="footer-link link">
                  Home
                </NavLink>
              </li>
              <li className="footer-pages-list-item">
                <NavLink to="/about-cats" className="footer-link link">
                  About cats
                </NavLink>
              </li>
              <li className="footer-pages-list-item">
                <NavLink to="/gallery" className="footer-link link">
                  Gallery
                </NavLink>
              </li>
              <li className="footer-pages-list-item">
                <NavLink to="/about-us" className="footer-link link">
                  About us
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="footer-list-item">
            <div className="footer-social">
              <a className="footer-twitter">
                <TwitterSvg />
              </a>
              <a className="footer-facebook">
                <FacebookSvg />
              </a>
              <a className="instagram">
                <InstagramSvg />
              </a>
            </div>
            <p className="footer-social-text">Social Media</p>
          </li>
        </ul>
        <hr className="footer-hr" />
        <p className="footer-text">© 2024 Catopia. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
