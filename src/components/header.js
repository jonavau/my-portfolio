import { Link } from 'react-router-dom';

export function Header({ children }) {
	return (
		<nav className="header-nav">
			<Link className="header-nav__link" to={''}>
				Jonathan Vauvert - Junior web developper
			</Link>
			<div>{children}</div>
		</nav>
	);
}
