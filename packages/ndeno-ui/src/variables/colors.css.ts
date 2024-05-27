// TODO rename as globals
import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";

import { blue, blueDark } from "@radix-ui/colors";

const root = createGlobalTheme("#ndeno-ui-app", {
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
  appBackhround: {
    normal: null,
    subtle: null,
  },
  border: {
    normal: null,
    focus: null,
    subtle: null,
  },
  component: {
    normal: null,
    hover: null,
    active: null,
  },
  solidBackGround: {
    normal: null,
    hover: null,
  },
  text: {
    lowContrast: null,
    highContrast: null,
  },
});

export const lightTheme = createTheme(colors, {
  appBackhround: {
    normal: blue.blue1,
    subtle: blue.blue2,
  },
  border: {
    normal: blue.blue7,
    focus: blue.blue8,
    subtle: blue.blue6,
  },
  component: {
    normal: blue.blue3,
    hover: blue.blue4,
    active: blue.blue5,
  },
  solidBackGround: {
    normal: blue.blue9,
    hover: blue.blue10,
  },
  text: {
    lowContrast: blue.blue11,
    highContrast: blue.blue12,
  },
});

export const darkTheme = createTheme(colors, {
  appBackhround: {
    normal: blueDark.blue1,
    subtle: blueDark.blue2,
  },
  border: {
    normal: blueDark.blue7,
    focus: blueDark.blue8,
    subtle: blueDark.blue6,
  },
  component: {
    normal: blueDark.blue3,
    hover: blueDark.blue4,
    active: blueDark.blue5,
  },
  solidBackGround: {
    normal: blueDark.blue9,
    hover: blueDark.blue10,
  },
  text: {
    lowContrast: blueDark.blue11,
    highContrast: blueDark.blue12,
  },
});

export const vars = { ...root, colors };
