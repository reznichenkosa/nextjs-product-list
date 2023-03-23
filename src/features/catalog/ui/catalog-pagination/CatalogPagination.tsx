import { Button } from "@/shared/ui/button";
import { FC } from "react";
import styles from "./CatalogPagination.module.css";

interface CatalogPaginationProps {
  currentPage: number;
  pageCount: number;
  prevClickHandler: () => void;
  nextClickHandler: () => void;
}

export const CatalogPagination: FC<CatalogPaginationProps> = ({
  currentPage,
  pageCount,
  prevClickHandler,
  nextClickHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <Button disabled={currentPage === 1} onClick={prevClickHandler}>
        Prev
      </Button>
      <span className={styles.currentPage}>{currentPage}</span>
      <Button disabled={currentPage === pageCount} onClick={nextClickHandler}>
        Next
      </Button>
    </div>
  );
};
