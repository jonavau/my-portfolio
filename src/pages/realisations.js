import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { RealisationCards } from '../components/realisations';

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

export default function Realisations() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h1>Bonjour</h1>
			<h2>
				Bienvenue sur la page réalisations, voici quelques un des
				projets que j'ai réalisé et les compétences qu'ils m'ont permis
				de développer
			</h2>

			<RealisationCards />
			<p>
				*retrouvez plus de projets sur mon GitHub, disponible dans le
				footer ou dans les contacts{' '}
			</p>
		</StyledHome>
	);
}
