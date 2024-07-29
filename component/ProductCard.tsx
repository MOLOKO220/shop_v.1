import React from "react";
import Link from "next/link";
import { ProductInterfaces } from "@/utils/interfaces";
import Rating from "@/component/Rating";

interface propsTest {
  productData: ProductInterfaces;
}

export default function ProductCard(props: propsTest) {
  return (
    <div className="ProductCard">
      <header>
        <div>
          <div className={props.productData.new_product ? "" : "display_none"}>
            Новинка
          </div>
          <div
            className={props.productData.price.discount ? "" : "display_none"}
          >
            -{props.productData.price.discount_percentage}%
          </div>
        </div>

        <img src="ProductCard_favorite.svg" alt="favorite" />
        {/* onClick = добавить в избраные */}
      </header>
      <main>
        <img src={props.productData.main_img} alt="product" />
        <main>
          <h5>{props.productData.title}</h5>
          <p>Категория: {props.productData.category}</p>
          <p>Производитель: {props.productData.country}</p>
          <div className="ProductCard_favorite_wrap">
            <Rating
              ProductId={props.productData._id}
              countReviews={props.productData.rating.countReviews}
              ratingValue={props.productData.rating.value}
            />
          </div>
        </main>
      </main>
      <footer>
        <div>
          <Link href={`/${props.productData._id}`}>Детальнее...</Link>
          <div
            className={
              props.productData.price.discount
                ? "display_none"
                : "ProductCard__discount-price"
            }
          >
            <p>Цена:</p>
            <div className="ProductCard__price">
              {props.productData.price.value}₴
            </div>
          </div>
          <div
            className={
              props.productData.price.discount
                ? "ProductCard__discount-price"
                : "display_none"
            }
          >
            <div>
              <p>Старая цена:</p>
              <p className="ProductCard__price">
                {props.productData.price.old_price}₴
              </p>
            </div>
            <div>
              <p>Новая цена: </p>
              <p className="ProductCard__price">
                {props.productData.price.value}₴
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
