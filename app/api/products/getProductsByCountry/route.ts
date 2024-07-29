import { type NextRequest } from "next/server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "../../modules/products";
import urlToStore from "@/utils/urls";

// return all items from "products" by "country"
export async function GET(req: NextRequest) {
  // localhost:3000/api/products/getProductsByCountry?country=США
  const searchParams = req.nextUrl.searchParams;
  const countryValue = searchParams.get("country"); // get "country" from URL

  return mongoose
    .connect(urlToStore)
    .then(async () => {
      // console.log("Connected to Mongodb");
      return await Product.find({ country: countryValue })
        .then((products: any) => {
          // console.log("return all products from the DB");
          return NextResponse.json(products);
        })
        .catch((err: any) => console.error(err));
    })
    .catch((err) => console.error(`Db connection error ${err}`));
}
