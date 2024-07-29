"use client";

import React, { useEffect, useState } from "react";
import { getProductById } from "@/utils/apiRequests";
import { getProductByCategory } from "@/utils/apiRequests";
import SliderWrap from "@/component/SliderWrap";
import ProductCard from "@/component/ProductCard";
import Rating from "@/component/Rating";
import Counter from "@/component/Counter";
import AddToCartButton from "@/component/AddToCartButton";

export default function ProductDetails({ params }: any) {
  // Hooks

  // ОЧЕНЬ ВАЖНО СЮДА ДОБАВИТЬ НОРМ ТИПЫ
  const [thisProduct, setThisProduct] = useState<any>(null);

  const [mainImg, setMainImg] = useState("");

  const [productsWithSameCategory, setProductsWithSameCategory] = useState([]);

  //  Counter
  const [count, setCount] = useState<number>(1);
  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  // gat this product
  useEffect(() => {
    getProductById(params.id).then((data) => {
      setThisProduct(data);
      setMainImg(data.img[0]);
      // get products with same category
      getProductByCategory(data.category).then((dataByCategory) => {
        setProductsWithSameCategory(
          dataByCategory.filter((el: any) => {
            return el._id != data._id;
          })
        );
      });
    });
  }, []);

  // cheng tab
  const [activeTab, setActiveTab] = useState("characteristics");
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  function showThisImg(e: any) {
    setMainImg(e.target.dataset.img);
  }

  // loading...
  if (thisProduct == null) {
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
    <main className="ProductDetails">
      <div className="container">
        <header>
          <h1
            onClick={() => {
              console.log(thisProduct);
            }}
          >
            {thisProduct.title}
          </h1>
          <div>
            <div className="ProductDetails_favorite_wrap">
              <Rating
                ProductId={thisProduct._id}
                ratingValue={thisProduct.rating.value}
                countReviews={thisProduct.rating.countReviews}
              />
              <p>В наличии: {thisProduct.count_product} штук</p>
            </div>
            <div className="ProductDetails__header__second-wrap">
              <p>Категория: {thisProduct.category}</p>
              <p>Код товара: {thisProduct._id}</p>
            </div>
          </div>
        </header>
        <main>
          <section className="ProductDetails__first-section">
            <main>
              <ul>
                {thisProduct.img.map((img: string) => {
                  return (
                    <li key={img}>
                      <img
                        src={img}
                        alt="img of product"
                        onClick={showThisImg}
                        data-img={img}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="ProductDetails__first-section__main-img">
                <img src={mainImg} alt="main picture" />
                <div>
                  <div
                    className={thisProduct.new_product ? "" : "display_none"}
                  >
                    Новинка
                  </div>
                  <div
                    className={thisProduct.price.discount ? "" : "display_none"}
                  >
                    -{thisProduct.price.discount_percentage}%
                  </div>
                </div>
              </div>
            </main>

            <div className="ProductDetails__first-section__inf">
              <header>
                <div>
                  <p>Цена:</p>
                  <h6>{thisProduct.price.value}₴</h6>
                </div>
                <div
                  className={
                    thisProduct.price.discount
                      ? "ProductDetails__first-section__inf__old-price"
                      : "display_none"
                  }
                >
                  <p>Cтарая цена:</p>
                  <h6>{thisProduct.price.old_price}₴</h6>
                </div>
              </header>
              <main>
                <div>
                  <p>Количество:</p>
                  <Counter onCountChange={handleCountChange} />
                </div>
                <footer>
                  <AddToCartButton
                    productId={thisProduct._id}
                    quantity={count}
                  />
                  <div>
                    <div>
                      <img
                        src="ProductDetails-favorit-grey.png"
                        className="favorit-black"
                        alt=""
                      />
                      <img
                        src="ProductDetails-favorit-white.png"
                        className="favorit-white"
                        alt=""
                      />
                    </div>
                  </div>
                </footer>
              </main>
              <footer>
                <div>
                  <img src="ProductDetails-arrov.png" alt="arrow" />
                  Возврат в течение 14 дней
                </div>
                <div>
                  <img src="ProductDetails-truck.png" alt="truck" />
                  Среднее время доставки 2.5 дня
                </div>
              </footer>
            </div>
          </section>
          <section className="ProductDetails__second-section">{/*  */}</section>
        </main>
        <footer className="ProductDetails__footer__desktop">
          <header>
            <div
              className={activeTab === "characteristics" ? "active" : ""}
              onClick={() => handleTabClick("characteristics")}
            >
              Характеристики
            </div>
            <div
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => handleTabClick("reviews")}
            >
              Отзывы
            </div>
            <div
              className={activeTab === "make-review" ? "active" : ""}
              onClick={() => handleTabClick("make-review")}
            >
              Написать отзыв
            </div>
          </header>
          <main
            className={
              activeTab === "characteristics"
                ? "ProductDetails__characteristics"
                : "display_none"
            }
          >
            <div>
              <p>Категория</p>
              <div>{thisProduct.category}</div>
            </div>
            {thisProduct.characteristics.map((el: any) => {
              return (
                <div key={el[0]}>
                  <p>{el[0]}</p>
                  <div>{el[1]}</div>
                </div>
              );
            })}
            <div>
              <p>Страна</p>
              <div>{thisProduct.country}</div>
            </div>
          </main>
          <main
            className={
              activeTab === "reviews"
                ? "ProductDetails__reviews"
                : "display_none"
            }
          >
            {/*  */}
            СЮДА выводим откзывы
          </main>
          <main
            className={
              activeTab === "make-review"
                ? "ProductDetails__make-review"
                : "display_none"
            }
          >
            <textarea
              id="story"
              name="story"
              placeholder="Оставить ваш отзыв"
            ></textarea>
            <button>Отправить</button>
          </main>
        </footer>
        <footer className="ProductDetails__footer__mobile">
          <div>
            <div onClick={() => handleTabClick("characteristics")}>
              <h4>Характеристики</h4>
            </div>
            <main className={activeTab === "characteristics" ? "active" : ""}>
              {thisProduct.characteristics.map((el: any) => {
                return (
                  <div key={el[0]}>
                    <p>{el[0]}</p>
                    <div>{el[1]}</div>
                  </div>
                );
              })}
            </main>
          </div>
          <div>
            <div onClick={() => handleTabClick("reviews")}>
              <h4>Отзывы (0)</h4>
            </div>
            <main className={activeTab === "reviews" ? "active" : ""}>
              СЮДА выводим откзывы
            </main>
          </div>
          <div>
            <div onClick={() => handleTabClick("make-review")}>
              <h4>Написать отзыв</h4>
            </div>
            <main className={activeTab === "make-review" ? "active" : ""}>
              <textarea
                id="story"
                name="story"
                placeholder="Оставить ваш отзыв"
              ></textarea>
              <button>Отправить</button>
            </main>
          </div>
        </footer>
        <div className="ProductDetails__slider">
          <h6>Вам может понравиться</h6>
          {productsWithSameCategory.length === 1 ? (
            <ProductCard productData={productsWithSameCategory[0]} />
          ) : (
            <SliderWrap productsArray={productsWithSameCategory} />
          )}
        </div>
      </div>
    </main>
  );
}
