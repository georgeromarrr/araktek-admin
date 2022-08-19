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
        className="text-black flex items-center hover:bg-neutral-300 p-2 rounded-lg relative dark:text-white dark:hover:bg-neutral-700"
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
            <li className="font-semibold cursor-pointer hover:bg-gray-300 hover:text-gray-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Settings
            </li>
            <li className="font-semibold cursor-pointer hover:bg-gray-300 hover:text-gray-700 p-2 rounded-sm dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
