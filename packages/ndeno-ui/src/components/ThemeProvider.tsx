import React from "react";
import { lightTheme, darkTheme } from "../variables/colors.css";

type Props = {
  theme: "light" | "dark";
  children: React.ReactNode;
};

const ThemeProvider = ({ theme, children }: Props) => {
  // const [theme, setTheme] = React.useState(lightTheme)

  return (
    <div
      id="ndeno-ui-app"
      className={theme === "light" ? lightTheme : darkTheme}
    >
      {children}
    </div>
  );
};

export { ThemeProvider };
