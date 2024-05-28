import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

const root = style({
  backgroundColor: vars.colors.component.normal,
  fontFamily: vars.fonts.body,
  padding: "16px",
  borderRadius: "5px",
  ":hover": {
    boxShadow: `0 0 2px 2px ${vars.colors.component.hover}`,
  },
  color: vars.colors.text.highContrast,
});

export const primary = style([root]);

export const secondary = style([root]);
