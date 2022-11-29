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
          >
            Факультеты
          </a>
        </li>
        <li className="navigation__list">
          <a class="navigation__link" activeClassName="active" href="#">
            Преимущества
          </a>
        </li>
        <li className="navigation__list">
          <a class="navigation__link" activeClassName="active" href="#footer">
            Контакты
          </a>
        </li>
        <li className="navigation__list">
          <a
            class="navigation__link"
            activeClassName="active"
            href="#questions"
          >
            Вопросы
          </a>
        </li>
        <li className="navigation__list">
        <ButtonLink
          href="https://practicum.yandex.ru/promo/hr_landing_1"
          Class="link_red"
          text="Откликнуться"
          target="_blank"
        />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
