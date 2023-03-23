import { Card } from "@/shared/ui/card";
import { FC } from "react";
import { Product } from "./product.model";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product?: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return <Card>tets</Card>;
};
