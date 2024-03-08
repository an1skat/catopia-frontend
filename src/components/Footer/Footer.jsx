import { TwitterSvg, FacebookSvg, InstagramSvg, LogoSvg } from "../Svg.jsx";
import { Container } from "../Container.styled.jsx";
import {
  MainFooter,
  FooterLogo,
  FooterText,
  FooterList,
  FooterListItem,
  FooterListTitle,
  FooterSecondaryList,
  FooterLink,
  FooterLinkA,
  FooterSocial,
  FooterSocialLink,
  FooterSocialText,
  FooterHr,
  FooterCopyright
} from "./Footer.styled.jsx";

const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <FooterList>
          <FooterListItem>
            <FooterLogo to="/home" className="link footer-logo">
              cat
              <LogoSvg />
              pia
            </FooterLogo>
            <FooterText>Welcome to world of cats</FooterText>
          </FooterListItem>
          <FooterListItem>
            <FooterListTitle>Contacts</FooterListTitle>
            <FooterSecondaryList>
              <FooterLinkA
                href="mailto:catopia@gmail.com"
              >
                catopia@gmail.com
              </FooterLinkA>
              <FooterLinkA href="tel:+380123456789">
                +380123456789
              </FooterLinkA>
              <FooterLinkA href="tel:+380987654321">
                +380987654321
              </FooterLinkA>
            </FooterSecondaryList>
          </FooterListItem>
          <FooterListItem>
            <FooterListTitle>Pages</FooterListTitle>
            <FooterSecondaryList>
              <li className="footer-pages-list-item">
                <FooterLink to="/home">
                  Home
                </FooterLink>
              </li>
              <li className="footer-pages-list-item">
                <FooterLink to="/about-cats">
                  About cats
                </FooterLink>
              </li>
              <li className="footer-pages-list-item">
                <FooterLink to="/gallery">
                  Gallery
                </FooterLink>
              </li>
              <li className="footer-pages-list-item">
                <FooterLink to="/about-us">
                  About us
                </FooterLink>
              </li>
            </FooterSecondaryList>
          </FooterListItem>
          <FooterListItem>
            <FooterSocial>
              <FooterSocialLink href="https://twitter.com">
                <TwitterSvg />
              </FooterSocialLink>
              <FooterSocialLink href="https://facebook.com">
                <FacebookSvg />
              </FooterSocialLink>
              <FooterSocialLink href="https://instagram.com/">
                <InstagramSvg />
              </FooterSocialLink>
            </FooterSocial>
            <FooterSocialText>Social Media</FooterSocialText>
          </FooterListItem>
        </FooterList>
        <FooterHr />
        <FooterCopyright>© 2024 Catopia. All rights reserved</FooterCopyright>
      </Container>
    </MainFooter>
  );
};

export default Footer;
