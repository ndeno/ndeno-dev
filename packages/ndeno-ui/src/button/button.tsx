import React from "react";
import "./button.css";

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => <button {...props} />;

export default Button;
