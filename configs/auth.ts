import type { AuthOptions } from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import mongoose from "mongoose";
import User from "../app/api/modules/user";
import urlToStore from "@/utils/urls";
import bcrypt from "bcrypt";

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // connect to MongoDB
        await mongoose.connect(urlToStore);

        // search user for email
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;
        console.log(user);

        // check password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) return null;

        // success
        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
