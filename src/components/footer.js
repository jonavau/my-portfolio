import * as themeActions from '../features/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../utils/selectors';
import { styled, keyframes } from 'styled-components';
import cat from '../assets/moving_cat.gif';
import cat2 from '../assets/dayCat.gif';
import { useState } from 'react';
import colors from '../styles/utils/colors';

const walkMax = keyframes`
    0% {
    transform: translate(-30rem, 0) ;
  }


  100% {
    transform: translate(25rem, 0) ;
`;

const walkMin = keyframes`
    0% {
    transform: translate(-30rem, 0) ;
  }


  100% {
    transform: translate(5rem, 0) ;
`;

const walkMed = keyframes`
    0% {
    transform: translate(-30rem, 0) ;
  }


  100% {
    transform: translate(18rem, 0) ;
`;

const StyledCat = styled.img`
	position: absolute;
	z-index: 1;
	bottom: 3.5rem;
	left: 30rem;
	width: 2.5rem;
	cursor: pointer;
	animation: ${walkMax} 23s linear forwards;
	@media (max-width: 1024px) {
		animation: ${walkMed} 23s linear forwards;
	}
	@media (max-width: 760px) {
		animation: ${walkMin} 23s linear forwards;
	}
	@media (max-width: 650px) {
		display: none;
	}
`;

const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	width: 95%;
	margin: auto;
	justify-content: center;
	align-items: center;
	transition: border-color 1s ease-out;
	border-top: 2px solid
		${({ $theme }) =>
			$theme === 'light' ? colors.secondary : colors.primary};
	box-shadow: 0 -15px 20px -20px #48abe0;
	padding: 2rem 0 1.5rem;
	height: 2.5rem;
	color: ${({ $theme }) =>
		$theme === 'light' ? colors.secondary : '#ffffff'};

	.ThemeButton {
		border-radius: 25%;
		width: 3rem;
		cursor: pointer;
		margin: 0.5rem;
		transition: 5s;
		text-align: ${({ $theme }) => ($theme === 'light' ? 'start' : 'end')};
	}

	a {
		text-decoration: none;
		color: inherit;
		margin: 1rem;
	}
`;

export function Footer({ website }) {
	const [pet, setPet] = useState(0);
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();
	return (
		<StyledFooter $theme={theme}>
			<StyledCat
				src={theme === 'dark' ? cat : cat2}
				alt="a moving pet"
				onClick={() => setPet(pet + 1)}
			></StyledCat>
			<p className="footer-text">{website}</p>
			<a
				href="https://github.com/greskelll"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fab fa-github"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/jonathan-vauvert-22570897/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-linkedin-in"></i>
			</a>
			<button
				className="ThemeButton"
				onClick={() => dispatch(themeActions.toggle())}
			>
				{theme === 'light' ? '🌒' : '🌞'}
			</button>
			<p>1.0 {pet}</p>
		</StyledFooter>
	);
}
