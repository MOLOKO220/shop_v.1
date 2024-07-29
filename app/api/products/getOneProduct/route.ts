import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import mongoose from "mongoose";
import Product from "../../modules/products";
import urlToStore from "@/utils/urls";

export async function GET(req: NextRequest) {
  // localhost:3000/api/products/getOneProduct?id=id
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id"); // get ID from URL

  return mongoose
    .connect(urlToStore)
    .then(async () => {
      // console.log("Connected to Mongodb");
      return await Product.findById(id)
        .then((product: any) => {
          // console.log("return one product by ID");
          return NextResponse.json(product);
        })
        .catch((err: any) => console.error(err));
    })
    .catch((err) => console.error(`Db connection error ${err}`));
}
