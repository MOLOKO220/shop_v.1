import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  email: String,
  items: [
    {
      productId: String,
      quantity: Number,
    },
  ],
});

let Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
