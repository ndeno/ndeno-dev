// TODO rename as globals
import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";

const light = {
  green1: "#fbfefc",
  green2: "#f3fbf7",
  green3: "#e4f7ed",
  green4: "#d3f1e3",
  green5: "#c0e9d6",
  green6: "#a8dfc6",
  green7: "#87cfb0",
  green8: "#53ba92",
  green9: "#01a275",
  green10: "#00946a",
  green11: "#008259",
  green12: "#193b2d",
  greenBackground: "#fff",
  greenContrast: "#fff",
  //   --green-surface: #f0faf5cc;
  //   --green-indicator: #01a275;
  //   --green-track: #01a275;
};

const dark = {
  green1: "#0b1310",
  green2: "#111b17",
  green3: "#102d21",
  green4: "#0a3c2a",
  green5: "#0f4935",
  green6: "#185841",
  green7: "#20694e",
  green8: "#247e5e",
  green9: "#01a275",
  green10: "#009569",
  green11: "#54d2a2",
  green12: "#a9f2d1",
  greenBackground: "#111",
  greenContrast: "#fff",
  //       --green-surface: color(display-p3 0.953 0.98 0.965 / 0.8);
  //       --green-indicator: oklch(63.1% 0.133 164.9);
  //       --green-track: oklch(63.1% 0.133 164.9);
};

export const grey = {
  gray1: "#fcfcfd",
  gray2: "#f9f9fb",
  gray3: "#eff0f3",
  gray4: "#e7e8ec",
  gray5: "#e0e1e6",
  gray6: "#d8d9e0",
  gray7: "#cdced7",
  gray8: "#b9bbc6",
  gray9: "#8b8d98",
  gray10: "#80828d",
  gray11: "#62636c",
  gray12: "#1e1f24",
  //   --gray-contrast: #FFFFFF;
  //   --gray-surface: #ffffffcc;
  //   --gray-indicator: #8b8d98;
  //   --gray-track: #8b8d98;
};

const root = createGlobalTheme("body", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Roboto, sans-seriff",
    body: "Roboto, sans-seriff",
  },
});

const colors = createThemeContract({
  primary: null,
  primaryInteract: null,
  secondary: null,
  background: null,
  backgroundLinearGradient: null,
  border: null,
  text: {
    normal: null,
    contrast: null,
    dark: null,
    light: null,
    // dimmed: null,
    // contrast: null,
    // background: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: light.green9,
  primaryInteract: light.green10,
  secondary: light.green2,
  background: light.greenBackground,
  backgroundLinearGradient: `linear-gradient(${light.green4}, ${light.greenBackground})`,
  border: grey.gray8,
  text: {
    normal: grey.gray1,
    contrast: dark.green1,
    dark: grey.gray12,
    light: grey.gray1,
    // contrast: grey.gray1,
    // dimmed: light.green9,
    // background: light.greenBackground,
  },
});

export const darkTheme = createTheme(colors, {
  primary: dark.green9,
  primaryInteract: dark.green10,
  secondary: dark.green2,
  background: dark.greenBackground,
  backgroundLinearGradient: `linear-gradient(${dark.green4}, ${dark.greenBackground})`,
  border: grey.gray8,
  text: {
    contrast: grey.gray1,
    normal: grey.gray1,
    dark: grey.gray12,
    light: grey.gray1,
    // dimmed: dark.green9,
    // background: dark.greenBackground,
  },
});

export const vars = { ...root, colors };
