import { Button } from "@/shared/ui/button";
import { FC } from "react";

interface AddProductToCartProps {
  addToCartHandler: () => void;
}

export const AddProductToCart: FC<AddProductToCartProps> = ({ addToCartHandler }) => {
  return (
    <Button onClick={addToCartHandler} size="big" variant="success">
      Add to cart
    </Button>
  );
};
