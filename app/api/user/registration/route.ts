import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "../../modules/user";
import urlToStore from "@/utils/urls";

import bcrypt from "bcrypt";

export async function POST(req: Request) {
  // localhost:3000/api/user/registration

  const body = await req.json();
  try {
    // connect to MongoDB
    await mongoose.connect(urlToStore);

    // email match checking
    const emailInBd = await User.findOne({ email: body.email });
    if (emailInBd)
      return NextResponse.json({
        status: "error",
        text: "Пользователь с таким email уже существует.",
      });

    // hashing password
    let passwordHash;
    if (body.password === body.password2) {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      passwordHash = await bcrypt.hash(body.password, salt);
    } else {
      return NextResponse.json({
        status: "error",
        text: "Пароль не совпадает!",
      });
    }

    // create new user
    const newUser = new User({
      email: body.email,
      password: passwordHash,
      name: body.name ? body.name : "User",
      status: body.status ? body.status : "user",
    });

    // save data in bd
    await newUser.save();
    return NextResponse.json({
      status: "success",
      text: "Пользователь добавлен!",
    }); //success
  } catch (err) {
    return NextResponse.json({ error: "Error adding user" }, { status: 500 });
  }
}
