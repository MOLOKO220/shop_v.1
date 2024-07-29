import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "../../modules/products";
import urlToStore from "@/utils/urls";

// return all items from "products" collections
export async function GET(req: Request) {
  // localhost:3000/api/products/getAllProducts
  return mongoose
    .connect(urlToStore)
    .then(async () => {
      // console.log("Connected to Mongodb");
      return await Product.find()
        .then((products: any) => {
          // console.log("return all products from the DB");
          return NextResponse.json(products);
        })
        .catch((err: any) => console.error(err));
    })
    .catch((err) => console.error(`Db connection error ${err}`));
}
