// import styled components library
import styled from "styled-components";
// We have to import Link from ReactRouter
// and Link from ReactScroll so we use aliasses to differentiate them
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  // make NavbarContainer a flex container
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  // padding - space between border and children
  //padding: vertical | horizontal
  padding: 0 24px;
`;

// NavLogo will be styled Router Link (redirects to the other page)
export const NavLogo = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-weight: 700;
  text-decoration: none;
`;

export const NavLogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0px;
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;

  // Rotate this element 180deg when we hover over Navlogo element
  ${NavLogo}:hover & {
    transform: rotate(180deg);
  }
`;

// MobileIcon will be a styled div
export const MobileIcon = styled.div`
  // Do not display on normal screen size
  display: none;

  @media screen and (max-width: 1000px) {
    // We have to specify display property to use positioning
    display: block;
    // absolute it means we position it relative to its parent!
    position: absolute;
    top: 0;
    right: 0;
    // translate(right (if positive), down(if positive)) - repositions an element
    // -100% makes it go to the left ()
    // -100% -> will be shifted left as far as its own width
    // 60% -> will be shifted down as far as 60% of its height
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;

// NavMenu will be styled unordered list
// elements at the top of the page
export const NavMenu = styled.ul`
  //make NavMenu a flex container
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  // below option is not that necessary
  margin-right: -22px;

  @media screen and (max-width: 1000px) {
    // Do not display on mobile size
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

// NavLinks will be styled ReactScroll links
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  // padding: vertical | horizontal
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;

  //using SCSS syntax & - means "this"
  //it compiles to normal CSS
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  // glow on hover
  &:hover {
    text-shadow: 2px 2px 10px white;
  }
`;

//DROP DOWN MENU
export const DropDownWrap = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  flex-direction: column;
  align-items: flex-start;
  cursor: default;
  border-radius: 5px;
  border: 1px solid white;
  background-color: #232627;
  text-shadow: none;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 1s, padding 0.75s, opacity 0.1s;
`;

export const DropDownItem = styled(LinkR)`
  text-decoration: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  transition: background 0.25s;
  padding: 10px 12px;

  &:hover {
    background-color: #3d4345;
  }
`;

export const DropDownLabel = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: vertical | horizontal
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;

  //using SCSS syntax & - means "this"
  //it compiles to normal CSS
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  // glow on hover
  &:hover {
    text-shadow: 2px 2px 10px white;
  }
  // when hovered over then display dropdown menu
  &:hover ${DropDownWrap} {
    max-height: 300px;
    padding: 10px;
    opacity: 1;
  }
`;

// NavLinkr will be styled ReactRouter links
export const NavLinkr = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: vertical | horizontal
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;

  //using SCSS syntax & - means "this"
  //it compiles to normal CSS
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  // glow on hover
  &:hover {
    text-shadow: 2px 2px 10px white;
  }
`;

export const NavBtn = styled.nav`
  margin-right: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

// NavBtnLink is an actual btn which is styled Router link (takes us to another page)
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ logout }) => (logout ? "#F26A8D" : "#01bf71")};
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: ${({ logout }) => (logout ? "#880D1E" : "#010606")};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ProfileIcon = styled(CgProfile)`
  color: white;
  margin-right: 5px;
  font-size: 20px;
  ${DropDownLabel}:hover & {
    filter: drop-shadow(0 0 8px white);
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  font-weight: bold;
`;

export const LoginIcon = styled(FiLogIn)`
  color: white;
  margin-left: 5px;
  font-size: 20px;
  ${NavLinkr}:hover & {
    filter: drop-shadow(0 0 8px white);
  }
`;
