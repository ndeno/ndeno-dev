import React, { useState } from "react";
import { Decorator } from "@storybook/react";
import { lightTheme, darkTheme, vars } from "../src/variables/colors.css";
import "./preview.css";

const ThemeDecorator: Decorator = (Story, context) => {
  const [theme, setTheme] = useState<string>(lightTheme);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme === "light" ? lightTheme : darkTheme);
  };

  if (context.viewMode === "docs") {
    return (
      <main className={theme}>
        <Story />
      </main>
    );
  }

  return (
    <main
      className={theme}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          background: vars.colors.backgroundLinearGradient,
          margin: "auto auto",
          justifyContent: "space-around",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <button onClick={() => handleThemeChange("light")}>
            Light Theme
          </button>
          <button onClick={() => handleThemeChange("dark")}>Dark Theme</button>
        </div>
        <div style={{ margin: "0 auto" }}>
          <Story />
        </div>
        <div />
      </section>
    </main>
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
