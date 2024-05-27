import React from "react";
import { rootStyle } from "./Input.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => (
  <input className={rootStyle} {...props} />
);
