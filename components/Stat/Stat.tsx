import styles from "./Stat.module.scss";

interface Props {
  name: string;
  count: number;
  total?: number;
}

export const Stat = ({ name, count, total = 15 }: Props) => {
  const whiteRowsArray = Array.from(Array(total - count).keys());
  const statsRowsArray = Array.from(Array(count).keys());

  return (
    <div>
      <div className={styles.rowsContainer}>
        {whiteRowsArray.map(() => {
          return <div className={styles.whiteRow}></div>;
        })}
        {statsRowsArray.map(() => {
          return <div className={styles.blueRow}></div>;
        })}
        <span className={styles.statName}>{name}</span>
      </div>
    </div>
  );
};
