"use client";

import { sendRegistrationData } from "@/utils/apiRequests";
import { useRef, type FormEventHandler } from "react";

export default function Registration() {
  // Hooks
  const responseBoard = useRef<HTMLDivElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    const name = formData.get("name");

    sendRegistrationData({
      email: String(email),
      password: String(password),
      password2: String(password2),
      name: String(name),
    }).then((data: { status: String; text: String }) => {
      // show response to user
      if (data.status === "error" && responseBoard.current) {
        // if error
        responseBoard.current.innerHTML = String(data.text);
        responseBoard.current?.classList.add("error");
        setTimeout(() => {
          if (responseBoard.current) responseBoard.current.innerHTML = "";
          responseBoard.current?.classList.remove("error");
        }, 5000);
      } else {
        // if success
        if (responseBoard.current) {
          responseBoard.current.innerHTML = String(data.text);
        }
        responseBoard.current?.classList.add("success");
        setTimeout(() => {
          if (responseBoard.current) responseBoard.current.innerHTML = "";
          responseBoard.current?.classList.remove("success");
        }, 5000);
      }
    });
  };

  return (
    <main className="Registration">
      <form className="container" onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <input type="email" placeholder="email" name="email" required />
        <input type="text" placeholder="Пароль" name="password" required />
        <input
          type="text"
          placeholder="Повторить пароль "
          name="password2"
          required
        />
        <input type="text" placeholder="Имя" name="name" required />

        <div className="Registration__response-board" ref={responseBoard}></div>
        <button type="submit">Зарегистрировать</button>
      </form>
    </main>
  );
}
