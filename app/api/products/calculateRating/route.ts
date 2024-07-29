import { type NextRequest } from "next/server";

import mongoose from "mongoose";
import Product from "../../modules/products";
import urlToStore from "@/utils/urls";

export async function GET(req: NextRequest) {
  // localhost:3000/api/products/calculateRating?id=[id]&rating=[rating]
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id"); // get ID from URL
  const rating = searchParams.get("rating"); // get ID from URL

  mongoose
    .connect(urlToStore)
    .then(async () => {
      await Product.findById(id) // receive data
        .then((product: any) => {
          // calculating rating, formula: ((Average rating * Number of votes) + New voice) /  (Number of votes + 1)
          const a =
            product.rating.value * product.rating.countReviews + Number(rating);
          const b = product.rating.countReviews + 1;
          const c = a / b;
          return {
            calculatedRating: c,
            countReviews: product.rating.countReviews + 1,
          };
        })
        .then((data) => {
          // update data
          Product.updateOne(
            { _id: id },
            {
              $set: {
                "rating.value": data.calculatedRating,
                "rating.countReviews": data.countReviews,
              },
            }
          ).catch((err) => {
            console.error("Ошибка при обновлении записи:", err);
          });
        })
        .catch((err: any) => console.error(err));
    })
    .catch((err) => console.error(`Db connection error ${err}`));
}
