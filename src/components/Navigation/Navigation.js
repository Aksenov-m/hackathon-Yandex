import { h } from "preact";

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
          <a
            class="navigation__link"
            activeClassName="active"
            href="https://practicum.yandex.ru/promo/hr_landing_1#marketing"
            target="_blank"
            rel="noreferrer"
          >
            Вакансии
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
      </ul>
    </nav>
  );
};

export default Navigation;
