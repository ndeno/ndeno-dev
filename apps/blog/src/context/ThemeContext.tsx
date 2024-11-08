import React from "react";

type Theme = "light" | "dark";
type ThemeContext = {
  theme: Theme;
  toggleTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

const ThemeContext = React.createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const theme: Theme = isTheme(savedTheme) ? savedTheme : "light";

    setTheme(theme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(() => newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
