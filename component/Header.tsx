"use client";
import { useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  // Hooks

  // auth
  const session = useSession();

  // Mobile menu
  const mobileMenuWrap = useRef<HTMLDivElement | null>(null);

  function showMobMenu() {
    mobileMenuWrap.current!.classList.add("active");
  }

  function clothMobMenu() {
    mobileMenuWrap.current!.classList.remove("active");
  }

  return (
    <header className="Header">
      <div className="container">
        {/* mobile menu */}
        <div className="Header_burger-btn" onClick={showMobMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="Header__mobile-menu" ref={mobileMenuWrap}>
          <Link href="/">Главная</Link>
          <Link href="/catalog">Каталог</Link>
          {!session?.data && (
            <div className="Header__mobile__unauthorized">
              <Link href="/registration">Регистрация</Link>
              <Link href="/signin">Вход</Link>
            </div>
          )}
          <div className="cloth-btn" onClick={clothMobMenu}>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* mobile menu end */}
        <Link href="/">
          <img src="Logo.svg" alt="Logo" />
        </Link>
        <nav>
          <Link href="/">Главная</Link>
          <Link href="/catalog">Каталог</Link>
        </nav>
        <div>
          {!session?.data && (
            <div className="Header__unauthorized">
              <Link href="/signin">Вход</Link>
              <Link href="/registration">Регистрация</Link>
            </div>
          )}

          {session?.data && (
            <>
              <div>
                <Link href="/profile">
                  <img src="header_profile.svg" alt="profile" />
                  <img
                    className="hover"
                    src="header_profile-green.svg"
                    alt="profile"
                  />
                </Link>
              </div>
              <div>
                <Link href="/cart">
                  <img src="header_basket.svg" alt="basket" />
                  <img
                    src="header_basket-green.svg"
                    alt="basket"
                    className="hover"
                  />
                </Link>
              </div>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Выйти
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
