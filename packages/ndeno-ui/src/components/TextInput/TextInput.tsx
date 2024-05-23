import React, { ReactNode } from "react";
import { rootStyle } from "./TextInput.css";

type Props = React.ButtonHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: Props) => (
  <input className={rootStyle} {...props} />
);
