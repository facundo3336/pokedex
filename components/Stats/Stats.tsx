import { Stat } from "../Stat/Stat";
import styles from "./Stats.module.scss";

interface Props {
  stats: Array<{
    name: string;
    stat: number;
  }>;
}

export const Stats = ({ stats }: Props) => {
  return (
    <div className={styles.statsContainer}>
      <h6>Puntos de base</h6>
      <div className={styles.stats}>
        {stats.map((statInfo) => {
          return (
            <Stat name={statInfo.name} count={Math.trunc(statInfo.stat / 10)} />
          );
        })}
      </div>
    </div>
  );
};
