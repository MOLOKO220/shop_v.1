"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getCart } from "@/utils/apiRequests";

export default function page() {
  const session = useSession();

  console.log(session.data?.user);

  useEffect(() => {
    if (session.data?.user?.email) {
      getCart(session.data?.user?.email).then((data) => {
        console.log(data);
      });
    }
  }, [session]);

  return (
    <main className="Cart">
      <div className="container">
        <h4>Корзина:</h4>
        <main></main>
      </div>
    </main>
  );
}
