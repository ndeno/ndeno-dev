// TODO rename as globals
import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";

const greenLight = {
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

const greenDark = {
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

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
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
    dimmed: null,
    background: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: greenLight.green9,
  primaryInteract: greenLight.green10,
  secondary: greenLight.green5,
  background: greenLight.greenBackground,
  backgroundLinearGradient: `linear-gradient(${greenLight.green4}, ${greenLight.greenBackground})`,
  border: grey.gray8,
  text: {
    normal: grey.gray12,
    dimmed: greenLight.green9,
    background: greenLight.greenBackground,
  },
});

export const darkTheme = createTheme(colors, {
  primary: greenDark.green9,
  primaryInteract: greenDark.green10,
  secondary: greenDark.green5,
  background: greenDark.greenBackground,
  backgroundLinearGradient: `linear-gradient(${greenDark.green4}, ${greenDark.greenBackground})`,
  border: grey.gray8,
  text: {
    normal: greenDark.greenContrast,
    dimmed: greenDark.green9,
    background: greenDark.greenBackground,
  },
});

export const vars = { ...root, colors };
