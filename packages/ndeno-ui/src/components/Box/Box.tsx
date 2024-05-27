import React from "react";
import { primary, secondary } from "./Box.css";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
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

export const Box = ({ variant = "primary", ...rest }: Props) => {
  const variantMap: { [x in Props["variant"]]: string } = {
    primary,
    secondary,
  } as const;

  return <div className={getClass(variant)} {...rest} />;
};
