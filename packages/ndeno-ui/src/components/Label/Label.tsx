import React from "react";
import { rootStyle } from "./Label.css";

type Props = React.HtmlHTMLAttributes<HTMLLabelElement>;

export const Label = (props: Props) => (
  <label className={rootStyle} {...props} />
);
