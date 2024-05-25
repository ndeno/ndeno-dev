import React, { ReactNode } from "react";
import { primary, secondary } from "./Button.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export const Button = ({ variant = "primary", ...rest }: Props) => {
  const variantMap = {
    primary,
    secondary,
  };

  return <button className={variantMap[variant]} {...rest} />;
};
