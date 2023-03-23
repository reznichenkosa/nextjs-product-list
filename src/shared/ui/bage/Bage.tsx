import { FC } from "react";
import styles from "./Bage.module.css";

interface BageProps {
  title: string;
}

export const Bage: FC<BageProps> = ({ title }) => {
  return <span className={styles.bage}>{title}</span>;
};
