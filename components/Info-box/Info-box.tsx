import styles from "./Info-box.module.scss";

interface Props {
  imgUrl: string;
  title: string;
  paragraph: string;
  color: "yellow" | "black" | "green";
}

export const InfoBox = ({ imgUrl, title, paragraph, color }: Props) => {
  const infoBoxClasses = styles.content + " " + styles[color];

  return (
    <div className={styles.container}>
      <div className={infoBoxClasses}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${imgUrl}")`,
          }}
        ></div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
