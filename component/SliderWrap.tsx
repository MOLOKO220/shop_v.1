"use client";
import Slider from "react-slick";
import { ProductInterfaces } from "@/utils/interfaces";
import ProductCard from "@/component/ProductCard";

interface propsTest {
  productsArray: ProductInterfaces[];
}

export default function SliderWrap(props: propsTest) {
  let showSlides = 4;

  if (typeof window !== "undefined") {
    if (props.productsArray.length === 3 || window.screen.width < 1265) {
      showSlides = 3;
    }
    if (props.productsArray.length === 2 || window.screen.width < 935) {
      showSlides = 2;
    }
    if (props.productsArray.length === 1 || window.screen.width < 630) {
      showSlides = 1;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: showSlides,
    slidesToScroll: 1,
  };
  return (
    <main
      className={
        props.productsArray.length == 2
          ? "SliderWrap SliderWrap__two-slide"
          : "SliderWrap"
      }
    >
      <Slider {...settings}>
        {props.productsArray.map((card) => {
          return <ProductCard key={card._id} productData={card} />;
        })}
      </Slider>
    </main>
  );
}
