import "./Button.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  return <button type="button" className="Button" {...props} />;
};
