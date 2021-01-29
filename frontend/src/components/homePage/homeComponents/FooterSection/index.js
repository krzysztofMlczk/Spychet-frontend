import React from "react";
import logoImg from "../../../../img/website_logo.png";
import {
  Footer,
  FooterLeft,
  Logo,
  Title,
  FooterLinksWrapper,
  NavLink,
  FooterCompanyName,
  FooterCenter,
  MapMarkerIcon,
  PhoneIcon,
  SupportIcon,
  FooterRight,
  FooterCompanyAbout,
  FooterIcons,
  LinkA,
  FbIcon,
  GitlabIcon,
  IgIcon,
  LinkedInIcon,
  Icon,
  TextWrapCenter,
  IconWrap,
  AboutTitle,
} from "./FooterSectionElements";

const FooterSection = () => {
  return (
    <Footer id="contact">
      <FooterLeft>
        <Logo src={logoImg} />
        <Title>Spachet</Title>
        <FooterLinksWrapper>
          <NavLink to="home" smooth={true} duration={800} exact="true">
            Home
          </NavLink>
          {" | "}
          <NavLink to="download" smooth={true} duration={500} exact="true">
            Download
          </NavLink>
          {" | "}
          <NavLink to="about" smooth={true} duration={500} exact="true">
            About
          </NavLink>
        </FooterLinksWrapper>
        <FooterCompanyName>© 2020 Stamina Game Studio Inc.</FooterCompanyName>
      </FooterLeft>

      <FooterCenter>
        <TextWrapCenter>
          <IconWrap>
            <Icon>
              <MapMarkerIcon />
            </Icon>
          </IconWrap>
          309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1 Mahape, Navi Mumbai
          - 400710
        </TextWrapCenter>

        <TextWrapCenter>
          <IconWrap>
            <Icon>
              <PhoneIcon />
            </Icon>
          </IconWrap>
          +91 22-27782183
        </TextWrapCenter>
        <TextWrapCenter>
          <IconWrap>
            <Icon>
              <SupportIcon />
            </Icon>
          </IconWrap>
          support@spachet.com
        </TextWrapCenter>
      </FooterCenter>

      <FooterRight>
        <AboutTitle>About the company</AboutTitle>
        <FooterCompanyAbout>
          We offer professional game design and development
        </FooterCompanyAbout>
        <FooterIcons>
          <LinkA href="https://facebook.com">
            <FbIcon />
          </LinkA>
          <LinkA href="https://gitlab.com">
            <GitlabIcon />
          </LinkA>
          <LinkA href="https://instagram.com">
            <IgIcon />
          </LinkA>
          <LinkA href="https://linkedin.com">
            <LinkedInIcon />
          </LinkA>
        </FooterIcons>
      </FooterRight>
    </Footer>
  );
};

export default FooterSection;
