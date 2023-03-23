import { Product, ProductCard } from "@/entities/product";
import { CatalogPagination } from "@/features/catalog";
import { AddProductToCart } from "@/features/product";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Catalog.module.css";

interface QueryData {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export const Catalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const queryDataRef = useRef<Omit<QueryData, "products">>({
    limit: 8,
    skip: 0,
    total: 100,
  });

  const pageCount = useMemo(() => {
    return Math.ceil(queryDataRef.current.total / queryDataRef.current.limit);
  }, []);

  const nextPageClickHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPageClickHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const getProductData = async () => {
      setIsLoading(true);
      queryDataRef.current.skip = (currentPage - 1) * queryDataRef.current.limit;
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${queryDataRef.current?.limit}&skip=${queryDataRef.current?.skip}`
        );
        const { products } = (await response.json()) as QueryData;
        setProductData(products);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getProductData();
  }, [currentPage]);

  if (isLoading) {
    return <h2 className={styles.loading}>Loading...</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.productList}>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCartBtn={
              <AddProductToCart
                addToCartHandler={() => alert(`${product.title} add to cart success!`)}
              />
            }
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <CatalogPagination
          currentPage={currentPage}
          pageCount={pageCount}
          nextClickHandler={nextPageClickHandler}
          prevClickHandler={prevPageClickHandler}
        />
      </div>
    </div>
  );
};
