import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  //make it go above everything
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  //if it is opened opacity = 100% (else invisible)
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  //if it is opened then set the top property
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

//Close icon will be styled FontAwesome Times icon
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat() (6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLinkRouter = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${({ logout }) => (logout ? "#F26A8D" : "#01bf71")};
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 16px 40px;
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

export const LoginIcon = styled(FiLogIn)`
  margin-left: 10px;
`;

export const LogoutIcon = styled(FiLogOut)`
  margin-left: 10px;
`;

export const ProfileIcon = styled(CgProfile)`
  margin-right: 5px;
  font-size: 25px;

  ${SidebarLinkRouter}:hover & {
    filter: drop-shadow(0 0 8px #010606);
    transition: all 0.2s ease-in-out;
  }
`;
