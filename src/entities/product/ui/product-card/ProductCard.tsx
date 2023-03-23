import { Bage } from "@/shared/ui/bage";
import { Card } from "@/shared/ui/card";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Product } from "../../model/product.model";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  addToCartBtn?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({ product, addToCartBtn }) => {
  const { thumbnail, title, price, description, discountPercentage } = product;
  const intPrice = price.toLocaleString("en-EN", { style: "currency", currency: "USD" });
  return (
    <Card>
      <div className={styles.wrapper}>
        <Image
          src={thumbnail}
          alt={title}
          className={styles.thumbnail}
          width={100}
          height={100}
          priority
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceInfo}>
          <span className={styles.price}>{intPrice}</span>
          <Bage title={`Sale ${String(discountPercentage)}%`} />
        </div>
        <div className={styles.addToCartBtn}>{addToCartBtn}</div>
      </div>
    </Card>
  );
};
