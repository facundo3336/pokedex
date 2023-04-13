import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  color: "green" | "blue" | "cian" | "search";
  children: React.ReactNode;
  fontSize: "sm" | "md" | "lg" | "xl";
}

export const Button = ({ onClick, color, children, fontSize }: Props) => {
  const buttonClasses =
    styles.button + " " + styles[color] + " " + styles[fontSize];

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
