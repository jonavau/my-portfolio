import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledHeader = styled.header`
	.header-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #ccc;
		padding: 2rem 0 1.5rem;
		height: 2.5rem;
	}

	a {
		text-decoration: none;
		color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
	}
`;

export function Header({ children }) {
	const theme = useSelector(selectTheme);

	return (
		<StyledHeader $theme={theme}>
			<nav className="header-nav">
				<Link className="header-nav__link" to={''}>
					Jonathan Vauvert - Junior web developper
				</Link>
				<div>{children}</div>
			</nav>
		</StyledHeader>
	);
}
