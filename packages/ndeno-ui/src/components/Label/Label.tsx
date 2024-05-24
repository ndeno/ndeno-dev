import React from "react";
import * as _Label from "@radix-ui/react-label";
import { rootStyle } from "./Label.css";

type Props = React.HtmlHTMLAttributes<HTMLLabelElement>;

export const Label = (props: Props) => (
  <_Label.Root className={rootStyle} {...props} />
);
