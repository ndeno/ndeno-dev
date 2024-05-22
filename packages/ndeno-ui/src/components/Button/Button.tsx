import React, { ReactNode } from "react";
import { rootStyle } from "./Button.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => (
  <button className={rootStyle} {...props} />
);
