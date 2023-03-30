import { useState } from "react";
import styles from "./HamburgerMenu.module.scss";

interface Props {
  onClick: () => void;
}

export const HamburgerButton = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.hamburgerButton}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};
