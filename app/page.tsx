"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import SliderWrap from "@/component/SliderWrap";
import { ProductInterfaces } from "@/utils/interfaces";
import { getAllProducts } from "@/utils/apiRequests";

export default function Main() {
  // Hooks
  const [productWithDiscount, setProductWithDiscount] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      // filter for sliders
      const discountFilter = data.filter((productItem: ProductInterfaces) => {
        return productItem.price.discount;
      });
      const newFilter = data.filter((productItem: ProductInterfaces) => {
        return productItem.new_product;
      });
      setProductWithDiscount(discountFilter);
      setNewProduct(newFilter);
      // setAllProducts(data);
    });
  }, []);

  return (
    <main className="Home">
      <section className="Home__first-section">
        <div className="container">
          {/* ========================== */}
          <div>
            {/* тут риализавать изменения из админ панели */}
            <h1>Новая коллекция ковров Venetta</h1>
            <Link href="Catalog">Смотреть все</Link>
          </div>
          <div>
            <div>
              <div>
                <img src="Home_first-section.png" alt="product" />
                {/* !!!!!! цена тоже меняется, берётся из панели, или заглушка */}
                <div className="Home__first-section__price">2.000₴</div>
              </div>
            </div>
          </div>
          {/* ========================== */}
        </div>
        <div className="Home__first-section_mobile">
          <h1>Новая коллекция ковров Venetta</h1>
          <img src="Home_first-section.png" alt="product" />
          <Link href="Catalog">Смотреть все</Link>
        </div>
      </section>
      <section className="Home__new-goods">
        <div className="container">
          <main>
            <h3>Новинки</h3>
            <SliderWrap productsArray={newProduct} />
          </main>
          <main>
            <h3>Скидки</h3>
            <SliderWrap productsArray={productWithDiscount} />
          </main>
        </div>
      </section>
    </main>
  );
}
