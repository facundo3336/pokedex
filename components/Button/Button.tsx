import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  color: "green" | "blue" | "cian";
  children: React.ReactNode;
}

export const Button = ({ onClick, color, children }: Props) => {
  const buttonClasses = styles.button + " " + styles[color];

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
