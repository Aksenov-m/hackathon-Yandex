import { h } from "preact";
import ButtonLink from "../buttonLink/buttonLink";

const Navigation = (props) => {
  return (
    <nav
      className={`navigation ${
        props.burgerOpen ? "navigation__burger_opened" : ""
      }`}
    >
      <ul className="navigation__nenu">
        <li className="navigation__list">
          <a
            class="navigation__link"
            activeClassName="active"
            href="https://practicum.yandex.ru/catalog/"
            target="_blank"
            rel="noreferrer"
            onClick={props.closeBurger}
          >
            Факультеты
          </a>
        </li>
        <li className="navigation__list">
          <a
            class="navigation__link"
            activeClassName="active"
            href="#benefits"
            onClick={props.closeBurger}
          >
            Преимущества
          </a>
        </li>
        <li className="navigation__list">
          <a
            class="navigation__link"
            activeClassName="active"
            href="#footer"
            onClick={props.closeBurger}
          >
            Контакты
          </a>
        </li>
        <li className="navigation__list">
          <a
            class="navigation__link"
            activeClassName="active"
            href="#questions"
            onClick={props.closeBurger}
          >
            Вопросы
          </a>
        </li>
        <li className="navigation__list">
          <ButtonLink
            href="https://practicum.yandex.ru/promo/hr_landing_1"
            Class={`${props.burgerOpen ? "link_white" : "link_red"}`}
            text={`${props.burgerOpen ? "Роли" : "Откликнуться"}`}
            target="_blank"
            onClick={props.closeBurger}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
