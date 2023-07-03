import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledHome = styled.main`
	h1,
	p {
		text-decoration: none;
		color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
	}
`;

export default function Contact() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h1>Bonjour</h1>
			<p>Bienvenue sur la page Contact</p>
		</StyledHome>
	);
}
