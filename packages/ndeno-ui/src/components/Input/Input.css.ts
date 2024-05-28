import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

export const rootStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "0 16px",
  height: "32px",
  fontSize: "12px",
  lineHeight: "32px",
  color: vars.colors.text.highContrast,
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.appBackhround.normal,
  border: `1px solid ${vars.colors.border.subtle}`,
  ":hover": {
    boxShadow: `0 0 0 1px ${vars.colors.border.normal}`,
  },
});
