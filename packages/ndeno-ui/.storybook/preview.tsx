import React, { useState } from "react";
import { Decorator } from "@storybook/react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

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
          background: `linear-gradient(${vars.colors.component.normal}, ${vars.colors.appBackhround.normal})`,
          margin: "auto auto",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <div style={{ margin: "0 0 0 auto", padding: "8px" }}>
          {theme === lightTheme ? (
            <MoonIcon
              onClick={() => handleThemeChange("dark")}
              style={{ color: vars.colors.text.highContrast }}
            />
          ) : (
            <SunIcon
              onClick={() => handleThemeChange("light")}
              style={{ color: vars.colors.text.highContrast }}
            />
          )}
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
