import { Card } from "@/shared/ui/card";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Product } from "../../model/product.model";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  addToCart?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({ product, addToCart }) => {
  const { id, thumbnail, title, price, description, discountPercentage } = product;
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
          <span className={styles.price}>{price}</span>
          <span className={styles.discount}>{discountPercentage}</span>
        </div>
        <div className={styles.addToCartBtn}>{addToCart}</div>
      </div>
    </Card>
  );
};
