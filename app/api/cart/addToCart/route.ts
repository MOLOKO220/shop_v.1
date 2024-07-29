import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import Cart from "../../modules/cart";
import urlToStore from "@/utils/urls";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // connect to MongoDB
    await mongoose.connect(urlToStore);

    // find cart by email
    let cart = await Cart.findOne({ email: body.email });

    // create new cart
    if (!cart) {
      cart = new Cart({ email: body.email, items: [] });
      await cart.save();
    }

    //
    // тут реализовать добовления тавара в карзину
    //
    // return NextResponse.json(cart);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await mongoose.disconnect();
  }
}
