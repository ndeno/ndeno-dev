import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

const root = style({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "0 15px",
  lineHeight: "1",
  fontSize: "15px",
  height: "35px",
  color: vars.colors.text.highContrast,
  fontFamily: vars.fonts.body,
  border: "unset",
  // ":hover": {
  //   backgroundColor: vars.colors.component.hover,
  // },
  ":focus": {
    boxShadow: `0 0 0 2px ${vars.colors.border.subtle}`,
  },
});

export const primary = style([
  root,
  {
    color: vars.colors.text.normal,
    backgroundColor: vars.colors.solidBackGround.normal,
    ":hover": {
      backgroundColor: vars.colors.solidBackGround.hover,
    },
  },
]);

export const secondary = style([
  root,
  {
    backgroundColor: vars.colors.appBackhround.subtle,
    color: vars.colors.text.lowContrast,
    border: `1px solid ${vars.colors.border.normal}`,
  },
]);
