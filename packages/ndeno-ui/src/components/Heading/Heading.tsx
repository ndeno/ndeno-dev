import React from "react";
import { primary, secondary } from "./Heading.css";

type Props = React.HtmlHTMLAttributes<HTMLHeadElement> & {
  variant: "primary" | "secondary";
};

const getClass = (variant: Props["variant"]) => {
  switch (variant) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;

    default:
      break;
  }
};

export const Heading = ({ variant = "primary", ...rest }: Props) => {
  if (variant === "primary") {
    return <h1 className={getClass(variant)} {...rest} />;
  }

  if (variant === "secondary") {
    return <h2 className={getClass(variant)} {...rest} />;
  }

  return null;
};
