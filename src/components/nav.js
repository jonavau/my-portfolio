import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from '../utils/selectors';

const StyledNav = styled.div`
	a {
		margin-left: 0.5rem;
		border-bottom: 1px ridge transparent;
		transition: font-size 0.7s ease-in-out;
		font-size: 1.5rem;
	}

	a:hover,
	.active {
		font-size: 1.8rem;
	}
`;

export default function Navigation() {
	const theme = useSelector(selectTheme);
	return (
		<StyledNav $theme={theme}>
			<NavLink activeclassname="active" to={'/Contact'}>
				Contact
			</NavLink>
			<NavLink activeclassname="active" to={'/Realisation'}>
				Realisation
			</NavLink>
		</StyledNav>
	);
}
