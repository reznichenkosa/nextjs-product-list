import styles from "./Card.module.css";
import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
