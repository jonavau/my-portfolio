import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import CV from '../assets/CV.pdf';
import colors from '../styles/utils/colors';

const StyledHome = styled.main`
	width: 95%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1,
	p {
		text-decoration: none;
		color: ${({ $theme }) =>
			$theme === 'light' ? colors.secondary : '#ffffff'};
	}
`;

const StyledContact = styled.div`
	border-radius: 1rem;
	width: 50%;
	margin: 1rem;
	padding: 0.5rem;
	background: ${({ $theme }) =>
		$theme === 'light' ? colors.primary : '#ffffff'};

	@media (max-width: 760px) {
		width: 90%;
	}

	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2rem;
		color: inherit;

		@media (max-width: 760px) {
			padding: 0 1rem;
		}
	}
`;

export default function Contact() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<StyledContact $theme={theme}>
				<a
					href="https://github.com/jonavau"
					target="_blank"
					rel="noreferrer"
				>
					jonavau
					<i className="fab fa-github"></i>
				</a>
			</StyledContact>
			<StyledContact $theme={theme}>
				<a
					href="https://www.linkedin.com/in/jonathan-vauvert-22570897/"
					target="_blank"
					rel="noreferrer"
				>
					Vauvert Jonathan
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
			</StyledContact>
			<StyledContact $theme={theme}>
				<a href="mailto:vauvertjonathan@gmail.com" rel="external">
					vauvertjonathan@gmail.com
					<i className="fa fa-envelope" aria-hidden="true"></i>
				</a>
			</StyledContact>
			<StyledContact $theme={theme}>
				<a href={CV} target="_blank" rel="noreferrer">
					Curriculum
					<i className="fa-solid fa-address-book"></i>
				</a>
			</StyledContact>
		</StyledHome>
	);
}
