import { style } from "@vanilla-extract/css";
import { grey, vars } from "../../variables/colors.css";

const root = style({
  // appearance: "none",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // borderRadius: "4px",
  // padding: "0 15px",
  // lineHeight: "1",
  // fontSize: "15px",
  // height: "35px",
  backgroundColor: vars.colors.interactive,
  fontFamily: vars.fonts.body,
  // border: `1px solid ${vars.colors.border}`,
  padding: "16px",
  borderRadius: "5px",
  // ":focus": {
  //   boxShadow: `0 0 0 2px ${vars.colors.primaryInteract}`,
  // },
});

export const primary = style([root]);

export const secondary = style([root]);
