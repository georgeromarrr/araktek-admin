import React, { useEffect, useState } from "react";
import DateTime from "../DateTime/DateTime";
import {
  RightNavbar,
  BlackLogo,
  WhiteLogo,
  UserMenu,
} from "./Navbar_Components";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);
  const userTheme = JSON.parse(localStorage.getItem("theme"));

  useEffect(() => {
    if (userTheme === "dark") {
      setThemeMode(true);
    } else {
      setThemeMode(false);
    }
  }, []);
  return (
    <nav className="w-full flex">
      <DateTime />
      <RightNavbar />
    </nav>
  );
};

export default Navbar;
