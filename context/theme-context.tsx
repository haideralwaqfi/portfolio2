"use client";
import React, { createContext, useEffect, useState } from "react";
type Theme = "light" | "dark";

type ThemeContextProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ThemeContextProvider({ children }: ThemeContextProps) {
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
