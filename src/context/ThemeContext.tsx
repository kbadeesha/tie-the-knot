'use client';

import { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  classNames: string;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
  classNames: "",
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      // Update body class based on the theme change
      document.body.className = theme === "dark" ? "dark bg-black text-white" : "bg-white text-black";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const classNames = theme === "dark" ? "dark bg-black text-white" : "bg-white text-black";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, classNames }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
