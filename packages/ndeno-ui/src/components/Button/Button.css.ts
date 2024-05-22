import { style } from "@vanilla-extract/css";
import { vars } from "../../variables/colors.css";

export const rootStyle = style({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  padding: "0 15px",
  lineHeight: "1",
  fontSize: "15px",
  height: "35px",
  color: vars.colors.primary,
});
