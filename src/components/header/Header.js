import { h } from 'preact';
//import { Link } from 'preact-router/match';

const Header = () => (
	<header class='header' id="header">
		<h1>Preact App</h1>
		<nav>
			<a activeClassName='active' href="#footer">Footer</a>
			<a activeClassName='active' href="#main">Main</a>
		</nav>
	</header>
);

export default Header;
