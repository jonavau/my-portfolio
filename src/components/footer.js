import * as themeActions from '../features/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../utils/selectors';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	width: 95%;
	margin: auto;
	justify-content: center;
	align-items: center;
	transition: border-color 1s ease-out;
	border-top: 2px solid
		${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#51d6aa')};
	box-shadow: 0 -15px 20px -20px #48abe0;
	padding: 2rem 0 1.5rem;
	height: 2.5rem;
	color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};

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
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();
	return (
		<StyledFooter $theme={theme}>
			<p className="footer-text">
				{new Date().getFullYear()} {website}
			</p>
			<a href="https://github.com/greskelll" rel="external">
				<i className="fab fa-github"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/jonathan-vauvert-22570897/"
				rel="external"
			>
				<i className="fa-brands fa-linkedin-in"></i>
			</a>
			<button
				className="ThemeButton"
				onClick={() => dispatch(themeActions.toggle())}
			>
				{theme === 'light' ? '🌒' : '🌞'}
			</button>
			<p>version 1.0</p>
		</StyledFooter>
	);
}
