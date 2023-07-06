import { Link } from 'react-router-dom';
import { styled, keyframes } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

const rotate = keyframes`
    to {
    transform: rotate(360deg);
    }
`;

const swap = keyframes`
    0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(15vw, 0) rotate(360deg);

`;

const StyledHeader = styled.header`
	color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
`;

const StyledHeaderNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	transition: border-color 1s ease-out;
	border-bottom: 2px solid
		${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#51d6aa')};
	padding: 2rem 0 1.5rem;
	box-shadow: 0 15px 20px -20px #48abe0;
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
		z-index: 1;
		top: -4.5rem;
		left: 20rem;
		width: 8rem;
		animation: ${swap} 24s linear infinite alternate;
	}

	@media (max-width: 1024px) {
		.sun,
		.moon {
			position: absolute;
			z-index: -1;
			top: -2rem;
			left: 40%;
			width: 4rem;
			animation: ${rotate} 24s linear infinite;
			transition: scale 1s ease-out;
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
			z-index: 1;
			top: -1.5rem;
			margin-left: auto;
			margin-right: auto;
			left: 0;
			right: 0;
			animation: ${rotate} 24s linear infinite;
			transition: scale 1s ease-out;
		}
		.sun:hover,
		.moon:hover {
			scale: 110%;
		}
	}
`;

export function Header({ children }) {
	const theme = useSelector(selectTheme);

	return (
		<StyledHeader $theme={theme}>
			<StyledHeaderNav $theme={theme}>
				<Link className="header-nav__link" to={''}>
					Jonathan Vauvert - Junior web developper
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
