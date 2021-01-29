import styled from "styled-components";
import { Link } from "react-scroll";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

export const FooterLeft = styled.div`
  width: 35%;
  text-align: left;
`;

export const FooterCenter = styled.div`
  width: 30%;
  text-align: center;
`;

export const FooterRight = styled.div`
  width: 35%;
  text-align: right;
`;

export const Logo = styled.img`
  width: 15%;
`;

export const Title = styled.h3`
  color: #ffffff;
  font-size: 36px;
`;

export const AboutTitle = styled.h4`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FooterLinksWrapper = styled.p`
  margin: 20px 0 12px;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  line-height: 1.8;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 10px white;
  }
`;

export const FooterCompanyName = styled.p`
  color: #8f9296;
  font-size: 14px;
`;

export const LocationWrapper = styled.div``;

export const MapMarkerIcon = styled(FaMapMarkerAlt)``;

export const TextWrapCenter = styled.div`
  margin: 20px 0;
`;

export const FooterCompanyAbout = styled.p`
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
`;

export const Icon = styled.div`
  display: inline-block;
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
`;

export const IconWrap = styled.div`
  display: inline-block;
`;

export const FooterIcons = styled.div`
  margin-top: 25px;
`;

export const LinkA = styled.a`
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;
  transition: all 0.1s ease-in;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;

  &:hover {
    scale: 0.9;
    background: #ffffff;
    color: #33383b;
  }
`;
/* ICONS */
export const FbIcon = styled(FaFacebookF)``;

export const GitlabIcon = styled(FiGitlab)``;

export const IgIcon = styled(GrInstagram)``;

export const LinkedInIcon = styled(FaLinkedin)``;

export const TelephoneWrapper = styled.div``;

export const PhoneIcon = styled(FaPhoneAlt)``;

export const SupportIcon = styled(FaRegEnvelope)``;

/*****************************************************/

export const Footer = styled.footer`
  position: relative;
  background: #232627;
  color: white;

  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding: 50px 50px 60px 50px;

  & ${FooterLeft}, & ${FooterCenter}, & ${FooterRight} {
    display: inline-block;
    vertical-align: center;
  }

  @media screen and (max-width: 880px) {
    & ${FooterLeft}, & ${FooterCenter}, & ${FooterRight} {
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }
    & ${IconWrap} {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
`;
