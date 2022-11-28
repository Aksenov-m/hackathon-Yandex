import { h } from 'preact';

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header (props) {

  return (
	<header class='header' id="header">
		<a class='header__link' href="https://practicum.yandex.ru/" target='_blank' rel="noreferrer">
    <Logo Class="header__logo" />
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
