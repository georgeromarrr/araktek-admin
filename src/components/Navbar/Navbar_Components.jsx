import { useState, useEffect } from "react";
import blacklogo from "../../assets/img/logo-black.png";
import whitelogo from "../../assets/img/logo-white.png";
import { ArrowIcon } from "../../assets/Icons/Icons";
import DarkMode from "../DarkMode/DarkMode";

// brand logo
export const BlackLogo = () => {
  return (
    <img className="h-14 mobile:h-13" src={blacklogo} alt="Araktek Logo" />
  );
};

export const WhiteLogo = () => {
  return (
    <img className="h-14 mobile:h-13" src={whitelogo} alt="Araktek Logo" />
  );
};

// user menu dropdown
export const UserMenu = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-black flex items-center hover:bg-neutral-200 p-2 rounded-lg relative dark:text-white dark:hover:bg-neutral-700"
        onClick={() => setOpen(!isOpen)}
      >
        <p className="font-semibold pr-1 dark:text-white">{props.username}</p>
        <span className={isOpen ? "origin-center rotate-180" : ""}>
          <ArrowIcon />
        </span>
      </button>
      {isOpen && (
        <div className="text-black absolute border border-black bg-white right-0 top-11 w-full rounded-sm divide-y divide-gray-400 shadow-xl px-1 dark:border-white dark:bg-neutral-900 dark:text-white">
          <p className="text-sm italic p-4">Owner</p>
          <ul className="p-2 text-sm">
            <li className="font-semibold cursor-pointer hover:bg-neutral-200 hover:text-neutral-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Settings
            </li>
            <li className="font-semibold cursor-pointer hover:bg-neutral-200 hover:text-neutral-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// navbar
export const RightNavbar = () => {
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
    <div className="w-full mr-1 my-1 border border-black rounded-md bg-gray-50 dark:bg-neutral-900 dark:border-white dark:text-white">
      <div className="flex justify-between my-4 mx-12">
        <div className="self-center">
          {themeMode ? <WhiteLogo /> : <BlackLogo />}
        </div>
        <div className="self-center">
          <div className="flex items-center gap-x-1">
            <p className="dark:text-white">Welcome,</p>
            <UserMenu username="Romar George Doinog" />
            <DarkMode onBtnClick={() => setThemeMode(!themeMode)} />
          </div>
        </div>
      </div>
    </div>
  );
};
