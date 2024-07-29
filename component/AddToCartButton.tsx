// components/AddToCartButton.tsx
"use client";

import React from "react";
// import { addToCart } from "@/utils/apiRequests";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const handleAddToCart = () => {
    //
    //
    // тут вызываем апишку добовления тавара в карзину
    // написать апи, передавать емейл, для связи с канкретной карзиной

    console.log("делает вызов на апи добовляния товаа");
    console.log(productId);
    console.log(quantity);
  };

  return <button onClick={handleAddToCart}>В корзину</button>;
};

export default AddToCartButton;
