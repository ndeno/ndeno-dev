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
  color: vars.colors.text.normal,
  fontFamily: vars.fonts.body,
  border: "unset",
  ":hover": {
    backgroundColor: vars.colors.primaryInteract,
  },
  ":focus": {
    boxShadow: `0 0 0 2px ${vars.colors.primaryInteract}`,
  },
});

export const primary = style([
  root,
  {
    backgroundColor: vars.colors.primary,
  },
]);

export const secondary = style([
  root,
  {
    backgroundColor: vars.colors.secondary,
    color: vars.colors.primary,
    border: `1px solid ${vars.colors.primary}`,
  },
]);
