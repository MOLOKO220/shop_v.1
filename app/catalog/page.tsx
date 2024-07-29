"use client";
import { useEffect, useState, useRef } from "react";
import Nouislider from "nouislider-react"; //nouislider
import "nouislider/distribute/nouislider.css"; //nouislider

import { ProductInterfaces } from "@/utils/interfaces";
import { getAllProducts } from "@/utils/apiRequests";
import ProductCard from "@/component/ProductCard";

export default function Catalog() {
  // hooks
  const [prise, setPrise] = useState([0, 5000]);
  const [showingProducts, setShowingProducts] = useState<
    ProductInterfaces[] | null
  >(null);
  const allProducts = useRef<ProductInterfaces[]>();

  // get products data
  useEffect(() => {
    getAllProducts().then((data) => {
      allProducts.current = data;
      setShowingProducts(data);
    });
  }, []);

  // get max prise
  const higherPrice = useRef<number>();
  useEffect(() => {
    let hPrice = 0;
    if (allProducts.current != undefined) {
      allProducts.current!.forEach((el) => {
        if (el.price.value > hPrice) hPrice = el.price.value;
      });
      higherPrice.current = hPrice;
      setPrise([0, hPrice]);
    }
  }, [allProducts.current]);

  // sort products
  function toggleClass(event: any, targetElement: any) {
    // show to active type of filter
    targetElement.classList.add("active");
    for (let i = 0; i < targetElement.parentElement!.children.length; i++) {
      if (targetElement.parentElement!.children[i] !== event.target) {
        targetElement.parentElement!.children[i].classList.remove("active");
      }
    }
  }

  function sortProductsByPriceAscending(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const targetElement = event.target as HTMLButtonElement;
    toggleClass(event, targetElement);

    const sortedProducts = [...showingProducts!].sort(
      (a, b) => a.price.value - b.price.value
    );
    setShowingProducts(sortedProducts);
  }

  function sortProductsByPriceDecreasing(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const targetElement = event.target as HTMLButtonElement;
    toggleClass(event, targetElement);

    const sortedProducts = [...showingProducts!].sort(
      (a, b) => b.price.value - a.price.value
    );
    setShowingProducts(sortedProducts);
  }

  function sortProductsByRating(event: React.MouseEvent<HTMLButtonElement>) {
    const targetElement = event.target as HTMLButtonElement;
    toggleClass(event, targetElement);

    const sortedProducts = [...showingProducts!].sort(
      (a, b) => b.rating.value - a.rating.value
    );
    setShowingProducts(sortedProducts);
  }

  // price filter
  function filterProductsByPriceRange() {
    // show products in the price category
    if (allProducts.current != undefined) {
      setShowingProducts(
        allProducts.current.filter(
          (product) =>
            product.price.value >= prise[0] && product.price.value <= prise[1]
        )
      );
    }
  }

  if (showingProducts == null) {
    return (
      <main className="ProductDetails">
        <div className="loading_img_wrap container">
          <img
            className="loading_img_wrap"
            src="loading_img.gif"
            alt="loading..."
          />
        </div>
      </main>
    );
  }

  return (
    <main className="Catalog container">
      <aside>
        <section>
          <h6>
            Цена, <span>гривна</span>
          </h6>
          {prise[1] > 0 && typeof higherPrice.current === "number" ? (
            <Nouislider
              range={{ min: 0, max: higherPrice.current }}
              start={[0, higherPrice.current!]}
              step={1}
              connect
              onUpdate={(values) => {
                setPrise([Number(values[0]), Number(values[1])]);
              }}
            />
          ) : null}
          <footer>
            <div>{prise[0]}₴</div>
            <div>{prise[1]}₴</div>
          </footer>
          <button onClick={filterProductsByPriceRange}>Показать</button>
        </section>
      </aside>
      <main>
        <header>
          Сортировать по:
          <button onClick={sortProductsByPriceAscending}>
            Сначала дешевые
          </button>
          <button onClick={sortProductsByPriceDecreasing}>
            Сначала дорогие
          </button>
          <button onClick={sortProductsByRating}>По рейтингу</button>
        </header>
        <main>
          {showingProducts.map((el) => {
            return <ProductCard key={el._id} productData={el} />;
          })}
        </main>
      </main>
    </main>
  );
}
