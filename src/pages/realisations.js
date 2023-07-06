import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledHome = styled.main`
	width: 95%;
	margin: auto;
	h1,
	p {
		text-decoration: none;
		color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
	}
`;

export default function Realisations() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h1>Bonjour</h1>
			<p>Bienvenue sur la page réalisations</p>
			<h2>
				Présenter au moins 2 projets sur lesquels vous avez travaillé,
				durant votre formation ou ailleurs. Pour chaque projet, il
				faudra afficher : une courte description de votre réalisation ;
				les compétences qu’il vous a permis de développer ; un lien vers
				le code ou le site (sur GitHub, par exemple).
			</h2>
		</StyledHome>
	);
}
