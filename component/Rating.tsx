import React from "react";
import { rateProduct } from "@/utils/apiRequests";

interface ratingProps {
  ProductId: string;
  countReviews: number;
  ratingValue: number;
}

export default function Rating(props: ratingProps) {
  // сюда нужно добавить ограничения для
  // голосования не автарезованых пользователей

  function voteForProductRating(e: any) {
    rateProduct(props.ProductId, e.target.dataset.rating);
  }

  return (
    <div className="Rating">
      <main>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-rating="1"
          onClick={voteForProductRating}
        >
          <g opacity="0.5">
            <g clipPath="url(#clip0_0_10980)">
              <path
                d="M8.00027 12.174L3.29827 14.806L4.34827 9.52065L0.391602 5.86198L5.74293 5.22732L8.00027 0.333984L10.2576 5.22732L15.6089 5.86198L11.6523 9.52065L12.7023 14.806L8.00027 12.174Z"
                fill={props.ratingValue >= 1 ? "goldenrod" : "grey"}
                data-rating="1"
              />
            </g>
          </g>
        </svg>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-rating="2"
          onClick={voteForProductRating}
        >
          <g opacity="0.5">
            <g clipPath="url(#clip0_0_10980)">
              <path
                d="M8.00027 12.174L3.29827 14.806L4.34827 9.52065L0.391602 5.86198L5.74293 5.22732L8.00027 0.333984L10.2576 5.22732L15.6089 5.86198L11.6523 9.52065L12.7023 14.806L8.00027 12.174Z"
                fill={props.ratingValue >= 2 ? "goldenrod" : "grey"}
                data-rating="2"
              />
            </g>
          </g>
        </svg>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-rating="3"
          onClick={voteForProductRating}
        >
          <g opacity="0.5">
            <g clipPath="url(#clip0_0_10980)">
              <path
                d="M8.00027 12.174L3.29827 14.806L4.34827 9.52065L0.391602 5.86198L5.74293 5.22732L8.00027 0.333984L10.2576 5.22732L15.6089 5.86198L11.6523 9.52065L12.7023 14.806L8.00027 12.174Z"
                fill={props.ratingValue >= 3 ? "goldenrod" : "grey"}
                data-rating="3"
              />
            </g>
          </g>
        </svg>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-rating="4"
          onClick={voteForProductRating}
        >
          <g opacity="0.5">
            <g clipPath="url(#clip0_0_10980)">
              <path
                d="M8.00027 12.174L3.29827 14.806L4.34827 9.52065L0.391602 5.86198L5.74293 5.22732L8.00027 0.333984L10.2576 5.22732L15.6089 5.86198L11.6523 9.52065L12.7023 14.806L8.00027 12.174Z"
                fill={props.ratingValue >= 4 ? "goldenrod" : "grey"}
                data-rating="4"
              />
            </g>
          </g>
        </svg>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-rating="5"
          onClick={voteForProductRating}
        >
          <g opacity="0.5">
            <g clipPath="url(#clip0_0_10980)">
              <path
                d="M8.00027 12.174L3.29827 14.806L4.34827 9.52065L0.391602 5.86198L5.74293 5.22732L8.00027 0.333984L10.2576 5.22732L15.6089 5.86198L11.6523 9.52065L12.7023 14.806L8.00027 12.174Z"
                fill={props.ratingValue >= 5 ? "goldenrod" : "grey"}
                data-rating="5"
              />
            </g>
          </g>
        </svg>
      </main>
      <div>{props.countReviews} отзывов</div>
    </div>
  );
}
