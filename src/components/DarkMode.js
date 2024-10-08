import React, { useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  // function to set dark theme
  const setDark = () => {
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
  };
  // function to set light theme
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (storedTheme === null && prefersDark)) {
      setDark();
    } else {
      setLight();
    }

    // listen for changes in system preferences and update theme if no localStorage value
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        e.matches ? setDark() : setLight();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // toggle between light and dark theme manually
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };
  // determine the initial state of the toggle
  const defaultDark =
    localStorage.getItem("theme") === "dark" ||
    (localStorage.getItem("theme") === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={defaultDark}
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
