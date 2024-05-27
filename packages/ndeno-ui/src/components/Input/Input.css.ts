import { style } from "@vanilla-extract/css";
import { grey, vars } from "../../variables/colors.css";

export const rootStyle = style({
  width: "200px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "0 10px",
  height: "35px",
  fontSize: "15px",
  lineHeight: "1",
  color: vars.colors.text.contrast,
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  ":hover": {
    boxShadow: `0 0 0 1px ${vars.colors.text.normal}`,
  },
});
