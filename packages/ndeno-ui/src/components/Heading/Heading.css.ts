import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

const root = style({
  fontFamily: vars.fonts.heading,
  color: vars.colors.text.highContrast,
});

export const primary = style([
  root,
  {
    fontSize: "66px",
  },
]);

export const secondary = style([
  root,
  {
    fontSize: "33px",
  },
]);
