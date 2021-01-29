import React, { useContext } from "react";
// import FaBars icon from react-icons library
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
// import navbar elements
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkr,
  NavBtn,
  NavBtnLink,
  NavLogoImg,
  ProfileIcon,
  LogoutIcon,
  LoginIcon,
  DropDownLabel,
  DropDownWrap,
  DropDownItem,
} from "./NavbarElements";
import logoImg from "../../../../img/website_logo.png";
import UserContext from "../../../../context/UserContext";

/**
 * Navigation bar Component.
 *
 * It appears at the top of home page.
 */

const Navbar = ({ toggle, logout }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { userData } = useContext(UserContext);

  return (
    <>
      <Nav>
        <NavbarContainer>
          {/*to - tells ReactRouter where to go when clicked*/}
          <NavLogo to="home" onClick={toggleHome}>
            <NavLogoImg src={logoImg} />
            Spachet
          </NavLogo>

          <MobileIcon onClick={toggle}>
            {/* container for burger menu icon */}
            {/* icon from react icons */}
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="download" smooth={true} duration={500} exact="true">
                Download
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={600} exact="true">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery" smooth={true} duration={800} exact="true">
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={1000} exact="true">
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              {userData.nickname ? (
                <DropDownLabel>
                  <ProfileIcon />
                  {userData.nickname}
                  <DropDownWrap>
                    <DropDownItem to="/profile">View Profile</DropDownItem>
                    <DropDownItem to="/maps">Maps</DropDownItem>
                  </DropDownWrap>
                </DropDownLabel>
              ) : (
                <NavLinkr to="/login">
                  Log in <LoginIcon />
                </NavLinkr>
              )}
            </NavItem>
          </NavMenu>
          <NavBtn>
            {userData.nickname ? (
              <NavBtnLink onClick={logout} to="/" logout={1}>
                Log out <LogoutIcon />
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/register" logout={0}>
                Sign Up
              </NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
