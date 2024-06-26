import React from "react";
import { primary, secondary } from "./Button.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const getClass = (variant: Props["variant"]) => {
  switch (variant) {
    case "primary":
      return primary;
      break;
    case "secondary":
      return secondary;
      break;

    default:
      break;
  }
};

export const Button = ({ variant = "primary", ...rest }: Props) => {
  const variantMap: { [x in Props["variant"]]: string } = {
    primary,
    secondary,
  } as const;

  return <button className={getClass(variant)} {...rest} />;
};
