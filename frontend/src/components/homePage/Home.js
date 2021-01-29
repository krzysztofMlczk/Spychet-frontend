import React, { useState, useContext } from "react";
// we dont have to specify Navbar/index.js because it will look for it by default
import Navbar from "./homeComponents/Navbar";
import Sidebar from "./homeComponents/Sidebar";
import Parallax from "./homeComponents/Parallax";
import InfoSection from "./homeComponents/InfoSection";
import GallerySection from "./homeComponents/GallerySection";
import { downloadObj, aboutObj } from "./homeComponents/InfoSection/Data";
import UserContext from "../../context/UserContext";
import FooterSection from "./homeComponents/FooterSection";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { setUserData } = useContext(UserContext);

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={toggle} logout={logout} />
      <Navbar toggle={toggle} logout={logout} />
      <Parallax />
      <InfoSection {...downloadObj} />
      <InfoSection {...aboutObj} />
      <GallerySection autoPlaySpeed={4} />
      <FooterSection />
    </>
  );
}
