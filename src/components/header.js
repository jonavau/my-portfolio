import { Link } from 'react-router-dom';
import { styled, keyframes } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import colors from '../styles/utils/colors';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

const swapMax = keyframes`
    0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(300px, 0) rotate(360deg);
`;

const swapMin = keyframes`
    0% {
    transform: translate(-40vw, 0) rotate(0deg);
  }
  100% {
    transform: translate(40vw, 0) rotate(360deg);
`;

const swapMed = keyframes`
    0% {
    transform: translate(0vw, 0) rotate(0deg);
  }
  100% {
    transform: translate(87vw, 0) rotate(360deg);
`;

const StyledHeader = styled.header`
	color: ${({ $theme }) =>
		$theme === 'light' ? colors.secondary : '#ffffff'};
`;

const StyledHeaderNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	transition: border-color 1s ease-out;
	border-bottom: 2px solid
		${({ $theme }) =>
			$theme === 'light' ? colors.secondary : colors.primary};
	padding: 2rem 0 1.5rem;
	box-shadow: 0 15px 20px -20px ${colors.primary};
	height: 4.5rem;
	position: relative;
	width: 95%;
	margin: auto;

	@media (max-width: 760px) {
		flex-direction: column;
		height: 6rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.sun,
	.moon {
		position: absolute;
		z-index: -1;
		top: -4.5rem;
		left: 20rem;
		width: 8rem;
		animation: ${swapMax} 24s linear infinite alternate;
	}

	@media (max-width: 1024px) {
		.sun,
		.moon {
			position: absolute;
			z-index: -1;
			top: -2rem;
			left: 0%;
			width: 4rem;
			animation: ${swapMed} 24s linear infinite alternate;
		}
		.sun:hover,
		.moon:hover {
			scale: 110%;
		}
	}
	@media (max-width: 760px) {
		.sun,
		.moon {
			position: absolute;
			z-index: -1;
			top: -1.5rem;
			margin-left: auto;
			margin-right: auto;
			left: 0;
			right: 0;
			animation: ${swapMin} 24s linear infinite alternate;
		}
	}
`;

export function Header({ children }) {
	const theme = useSelector(selectTheme);

	return (
		<StyledHeader $theme={theme}>
			<StyledHeaderNav $theme={theme}>
				<Link className="header-nav__link" to={''}>
					Jonathan Vauvert - Junior developper{' '}
					<i class="fas fa-home"></i>
				</Link>
				{theme === 'light' ? (
					<img src={sun} alt="the Sun" className="sun"></img>
				) : (
					<img src={moon} alt="the Moon" className="moon"></img>
				)}
				<>{children}</>
			</StyledHeaderNav>
		</StyledHeader>
	);
}
