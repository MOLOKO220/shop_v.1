"use client";

import Link from "next/link";

export default function Footer() {
  //
  function showMore(e: any) {
    e.target.nextSibling.classList.toggle("active");
    if (e.target.innerHTML === "+") {
      e.target.innerHTML = "-";
    } else {
      e.target.innerHTML = "+";
    }
  }

  return (
    <footer className="Footer">
      <div className="container">
        <ul>
          <h6>Каталог товаров</h6>
          <li>
            <Link href="#">Ковры</Link>
          </li>
          <li>
            <Link href="#">Коврики</Link>
          </li>
          <li>
            <Link href="#">Дорожки</Link>
          </li>
          <li>
            <Link href="#">Для ванной</Link>
          </li>
          <li>
            <Link href="#">Особенные ковры</Link>
          </li>
        </ul>
        <ul>
          <h6>Личный кабинет</h6>
          <li>
            <Link href="#">Личный кабинет</Link>
          </li>
          <li>
            <Link href="#">Мои заказы</Link>
          </li>
          <li>
            <Link href="#">Избранное</Link>
          </li>
        </ul>
        <ul>
          <h6>Центр поддержки</h6>
          <li>
            <Link href="#">Контакты</Link>
          </li>
          <li>
            <Link href="#">Доставка</Link>
          </li>
          <li>
            <Link href="#">Возвраты</Link>
          </li>
        </ul>
        <ul>
          <h6>Помощь и контакты</h6>
          <li>
            <Link href="#">
              <img src="Footer_phone.svg" alt="phone" />
              <p>+380 56 57 66 76</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="Footer_letter.svg" alt="phone" />
              <p>+380 56 57 66 76</p>
            </Link>
          </li>
          <li className="Footer__social-media">
            <div>
              <Link href="#">
                <img src="Footer_whatsapp.svg" alt="whatsapp" />
                <img
                  src="Footer_whatsapp-green.svg"
                  alt="whatsapp"
                  className="hover"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <img src="Footer_instagtam.svg" alt="whatsapp" />
                <img
                  src="Footer_instagtam-green.svg"
                  alt="whatsapp"
                  className="hover"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <img src="Footer_facebook.svg" alt="whatsapp" />
                <img
                  src="Footer_facebook-green.svg"
                  alt="whatsapp"
                  className="hover"
                />
              </Link>
            </div>
          </li>
        </ul>
        <ul>
          <h6>Рассылка</h6>
          <p>Подпишитесь, чтобы всегда быть в курсе наших новый акций</p>
          <label>
            <input type="email" placeholder="Ваш email" />
            <button>
              <img src="Footer_input-btn.svg" />
            </button>
          </label>
        </ul>
      </div>

      <div className="footer_mobile">
        <ul>
          <h6>Каталог товаров</h6>
          <div className="show-cloth-btn" onClick={showMore}>
            +
          </div>
          <div className="footer_mobile_wrap">
            <li>
              <Link href="#">Ковры</Link>
            </li>
            <li>
              <Link href="#">Коврики</Link>
            </li>
            <li>
              <Link href="#">Дорожки</Link>
            </li>
            <li>
              <Link href="#">Для ванной</Link>
            </li>
            <li>
              <Link href="#">Особенные ковры</Link>
            </li>
          </div>
        </ul>

        <ul>
          <h6>Личный кабинет</h6>
          <div className="show-cloth-btn" onClick={showMore}>
            +
          </div>
          <div className="footer_mobile_wrap">
            <li>
              <Link href="#">Личный кабинет</Link>
            </li>
            <li>
              <Link href="#">Мои заказы</Link>
            </li>
            <li>
              <Link href="#">Избранное</Link>
            </li>
          </div>
        </ul>

        <ul>
          <h6>Центр поддержки</h6>
          <div className="show-cloth-btn" onClick={showMore}>
            +
          </div>
          <div className="footer_mobile_wrap">
            <li>
              <Link href="#">Контакты</Link>
            </li>
            <li>
              <Link href="#">Доставка</Link>
            </li>
            <li>
              <Link href="#">Возвраты</Link>
            </li>
          </div>
        </ul>
        <ul>
          <h6>Помощь и контакты</h6>
          <div className="show-cloth-btn" onClick={showMore}>
            +
          </div>
          <div className="footer_mobile_wrap">
            <li>
              <Link href="#">
                <img src="Footer_phone.svg" alt="phone" />
                <p>+380 56 57 66 76</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="Footer_letter.svg" alt="phone" />
                <p>+380 56 57 66 76</p>
              </Link>
            </li>
          </div>
        </ul>
        <ul>
          <h6>Рассылка</h6>
          <p>Подпишитесь, чтобы всегда быть в курсе наших новый акций</p>
          <label>
            <input type="email" placeholder="Ваш email" />
            <button>
              <img src="Footer_input-btn.svg" />
            </button>
          </label>
        </ul>
        <div className="Footer__social-media">
          <div>
            <Link href="#">
              <img src="Footer_whatsapp.svg" alt="whatsapp" />
              <img
                src="Footer_whatsapp-green.svg"
                alt="whatsapp"
                className="hover"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <img src="Footer_instagtam.svg" alt="whatsapp" />
              <img
                src="Footer_instagtam-green.svg"
                alt="whatsapp"
                className="hover"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <img src="Footer_facebook.svg" alt="whatsapp" />
              <img
                src="Footer_facebook-green.svg"
                alt="whatsapp"
                className="hover"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
