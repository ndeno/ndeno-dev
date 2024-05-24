import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

export const rootStyle = style({
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "35px",
  color: vars.colors.text.normal,
  fontFamily: vars.fonts.body,
});
