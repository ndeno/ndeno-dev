import React from "react";
import { rootStyle } from "./Label.css";

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = (props: Props) => (
  <label className={rootStyle} {...props} />
);
