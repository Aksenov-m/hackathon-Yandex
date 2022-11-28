import { h } from "preact";
import logo from "../../imagesA/Logo_n.svg";


function Logo(props) {

  return (
    <img class={`link logo ${props.Class}`} src={logo} alt='Логотип.' />
  );
}

export default Logo;
