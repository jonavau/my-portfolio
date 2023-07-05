import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledHome = styled.main`
	width: 95%;
	margin: auto;

	h1,
	h2,
	p {
		text-decoration: none;
		color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
	}
`;

export default function Home() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h1>Bonjour</h1>
			<h2>En développement, revenez plus tard :) </h2>
			<p>Bienvenue sur la page Home</p>
			<p>
				Voici un petit paragraphe pour tester l'intégration continu via
				github action ;)
			</p>
		</StyledHome>
	);
}
