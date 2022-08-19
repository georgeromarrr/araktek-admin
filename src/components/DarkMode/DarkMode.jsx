import React, { useEffect, useState } from "react";
import { DayIcon, NightIcon } from "../../assets/Icons/Icons";

const DarkMode = ({ onBtnClick }) => {
  const [isSwitch, setSwitch] = useState(true);

  const userTheme = JSON.parse(localStorage.getItem("theme"));
  const root = document.documentElement;

  // system theme mode checking
  // const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const checkTheme = () => {
  //   if (userTheme === "dark" || (!userTheme && systemTheme)) {
  //     root.classList.add("dark");
  //     return;
  //   }
  // };

  useEffect(() => {
    // checkTheme(); //add to check system theme
    if (userTheme === "dark") {
      root.classList.add("dark");
      setSwitch(false);
    } else {
      root.classList.remove("dark");
      setSwitch(true);
    }
  }, []);

  const darkModeToggle = () => {
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify("light"));
      setSwitch(true);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
      setSwitch(false);
    }
  };
  return (
    <button
      onClick={() => {
        darkModeToggle();
        onBtnClick();
      }}
      type="button"
      className="ml-6 p-2 flex items-center rounded-full border border-black  bg-gray-100 hover:bg-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-600 dark:border-white"
    >
      {isSwitch ? <NightIcon /> : <DayIcon />}
    </button>
  );
};

export default DarkMode;
