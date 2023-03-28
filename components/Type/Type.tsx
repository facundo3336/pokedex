import styles from "./Type.module.scss";

interface Props {
  type: string;
}

export const Type = ({ type }: Props) => {
  const classes = styles[type] + " " + styles["typeContainer"];

  return (
    <div className={classes}>
      <span className={styles.name}>{type}</span>
    </div>
  );
};
