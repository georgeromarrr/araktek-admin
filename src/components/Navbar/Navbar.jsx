import React, { useEffect, useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { BlackLogo, WhiteLogo, UserMenu } from "./Navbar_Components";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState(false);
  const root = document.documentElement.classList;

  const changeLogo = () => {
    if (root.contains("dark")) {
      setThemeMode(true);
    } else {
      setThemeMode(false);
    }
  };

  console.log(themeMode);

  return (
    <div className="border border-black inset-x-0 rounded-md mt-2 mr-2 bg-gray-50 dark:bg-neutral-900 dark:border-white dark:text-white">
      <nav className="py-4 mx-12 flex justify-between">
        {themeMode ? <WhiteLogo /> : <BlackLogo />}
        <div className="flex self-center items-center gap-x-1">
          <p className="dark:text-white">Welcome,</p>
          <UserMenu username="Romar George Doinog" />
          <DarkMode onBtnClick={changeLogo} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
