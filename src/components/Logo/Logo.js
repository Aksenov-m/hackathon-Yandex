import { h } from "preact";
import logo from "../../imagesA/Logo_n.svg";

function Logo(props) {
  return (
    <a
      class={`logo__link ${props.ClassReference}`}
      href="https://practicum.yandex.ru/"
      target="_blank"
      rel="noreferrer"
    >
      <img class={`logo ${props.Class}`} src={logo} alt="Логотип." />
    </a>
  );
}

export default Logo;
