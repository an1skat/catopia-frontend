import styled from "styled-components";
import { NavLink as BaseNavLink, Link as Link } from "react-router-dom";

export const MainFooter = styled.footer`
  background-color: ${(p) => p.theme.colors.main};
  padding-top: 80px;
  padding-bottom: 60px;
`;
export const FooterLogo = styled(BaseNavLink)`
  color: ${(p) => p.theme.colors.white};
  transition: all 0.3s;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
  &:active {
    color: ${(p) => p.theme.colors.accent_active};
  }

  & svg {
    fill: ${(p) => p.theme.colors.white};
    transition: fill 0.3s;
    margin-right: 5px;
  }
  &:hover svg {
    fill: ${(p) => p.theme.colors.accent};
  }
  &:active svg {
    fill: ${(p) => p.theme.colors.accent_active};
  }
`;
export const FooterText = styled.p`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.fs20};
  font-weight: ${(p) => p.theme.fontWeights.fw400};
  line-height: normal;
  letter-spacing: 2.4px;
  margin-right: 109px;
  width: 306px;
`;
export const FooterList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 136px;
  list-style: none;
`;
export const FooterListItem = styled.li`
  position: relative;

  &:nth-child(2),
  &:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
export const FooterListTitle = styled.h3`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.fs40};
    font-weight: ${p => p.theme.fontWeights.fw500};
    line-height: normal;
    letter-spacing: 4.8px;
    text-transform: uppercase;
`;
export const FooterSecondaryList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    list-style: none;
`
export const FooterLinkA = styled.a`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.fs24};
    font-weight: ${p => p.theme.fontWeights.fw400};
    line-height: normal;
    letter-spacing: 2.88px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${p => p.theme.colors.accent};
    }
    &:active {
        color: ${p => p.theme.colors.accent_active};
    }
`
export const FooterLink = styled(Link)`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.fs24};
    font-weight: ${p => p.theme.fontWeights.fw400};
    line-height: normal;
    letter-spacing: 2.88px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${p => p.theme.colors.accent};
    }
    &:active {
        color: ${p => p.theme.colors.accent_active};
    }
`
export const FooterSocial = styled.div`
    margin-left: 116px;
    display: flex;
    gap: 60px;
    align-items: center;
`
export const FooterSocialLink = styled.a`
    & svg {
        fill: ${p => p.theme.colors.white};
        transition: fill 0.3s;
    }
    &:first-child svg {
        width: 59px;
        height: 49px;
    }
    &:nth-child(2) svg {
        width: 25px;
        height: 49px
    }

    &:hover svg {
        fill: ${p => p.theme.colors.accent};
    }
    &:active svg {
        fill: ${p => p.theme.colors.accent_active};
    }
`
export const FooterSocialText = styled.p`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.fs20};
    font-weight: ${p => p.theme.fontWeights.fw400};
    line-height: normal;
    letter-spacing: 2.4px;
    position: absolute;
    right: 45px;
    text-align: right;
    margin-top: 10px;
`
export const FooterHr = styled.hr`
    margin-top: 70px;
    border-top: ${p => p.theme.borders.thin} ${p => p.theme.colors.white};
`
export const FooterCopyright = styled.p`
    margin-top: 30px;
    text-align: center;
    color: ${p => p.theme.colors.light_white};
    font-size: ${p => p.theme.fontSizes.fs16};
    font-weight: ${p => p.theme.fontWeights.fw400};
    line-height: 175%;
    letter-spacing: 0.64px;
`