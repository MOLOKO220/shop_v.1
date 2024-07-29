import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  status: String,
});

let User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
