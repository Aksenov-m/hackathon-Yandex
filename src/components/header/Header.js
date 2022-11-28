import { h } from 'preact';

import logo from "../../imagesA/Logo_n.svg";
import Navigation from "../Navigation/Navigation";
//import { Link } from 'preact-router/match';

function Header (props) {

  return (
	<header class='header' id="header">
		<a class='header__link' href="https://practicum.yandex.ru/" target='_blank' rel="noreferrer">
      <img class='header__logo' src={logo} alt='Логотип.' />
    </a>
    <Navigation {...props} />
		{/* <nav>
			<a activeClassName='active' href="#footer">Footer</a>
			<a activeClassName='active' href="#main">Main</a>
		</nav> */}
	</header>
  );
}

export default Header;




    // <div className={`header__burger ${props.burgerOpen ? "header__burger_active" : ""}`} onClick={props.onBurger}>
    // <span onClick={props.onBurger}></span>
    // </div>
