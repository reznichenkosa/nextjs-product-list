import { ProductCard } from "@/entities/product-card";
import { ProductList } from "@/entities/product-list";
import { CatalogPagination } from "@/features/catalog-pagination";
import styles from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <div>
      <ProductList />
      <ProductCard />
      <CatalogPagination />
    </div>
  );
};
