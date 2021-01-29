import React, { useContext } from "react";
// import Sidebar elements
import UserContext from "../../../../context/UserContext";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinkRouter,
  LoginIcon,
  LogoutIcon,
  ProfileIcon,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, logout }) => {
  const { userData } = useContext(UserContext);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="download"
            smooth={true}
            duration={500}
            exact="true"
            onClick={toggle}
          >
            Download
          </SidebarLink>
          <SidebarLink
            to="about"
            smooth={true}
            duration={600}
            exact="true"
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="gallery"
            smooth={true}
            duration={800}
            exact="true"
            onClick={toggle}
          >
            Gallery
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={1000}
            exact="true"
            onClick={toggle}
          >
            Contact
          </SidebarLink>
          {userData.nickname ? (
            <SidebarLinkRouter to="/profile" onClick={toggle}>
              <ProfileIcon /> {userData.nickname}
            </SidebarLinkRouter>
          ) : (
            <SidebarLinkRouter to="/login" onClick={toggle}>
              Log in <LoginIcon />
            </SidebarLinkRouter>
          )}
        </SidebarMenu>
        <SideBtnWrap>
          {userData.nickname ? (
            <SidebarRoute to="/" onClick={logout} logout={1}>
              Log out <LogoutIcon />
            </SidebarRoute>
          ) : (
            <SidebarRoute to="/register" logout={0}>
              Sign Up
            </SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
