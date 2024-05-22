import React, { useState } from "react";
import { Decorator } from "@storybook/react";
import { lightTheme, darkTheme } from "../src/variables/colors.css";

const ThemeDecorator: Decorator = (Story, context) => {
  const [theme, setTheme] = useState<string>(lightTheme);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme === "light" ? lightTheme : darkTheme);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleThemeChange("light")}>Light Theme</button>
        <button onClick={() => handleThemeChange("dark")}>Dark Theme</button>
      </div>
      <div className={theme}>
        <Story />
      </div>
    </div>
  );
};

export const decorators = [ThemeDecorator];

export const parameters = {
  options: {
    theme: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
};
