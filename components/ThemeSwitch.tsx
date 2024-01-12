"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
type Theme = "light" | "dark";
export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    theme === "light"
      ? window.localStorage.setItem("theme", "dark")
      : window.localStorage.setItem("theme", "light");
    theme === "light"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
