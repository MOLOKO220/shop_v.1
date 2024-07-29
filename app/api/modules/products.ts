import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  characteristics: [[String]],
  price: {
    value: Number,
    discount: Boolean,
    old_price: Number || null,
    discount_percentage: Number || null,
  },
  reviews: [[String]],
  rating: {
    value: Number,
    countReviews: Number,
  },
  img: [String],
  new_product: Boolean,
});

let Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
