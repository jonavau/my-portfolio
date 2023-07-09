import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { Bubble } from '../components/Bubble';
import Tech from '../assets/Tech';
import colors from '../styles/utils/colors';

const StyledHome = styled.main`
	width: 95%;
	margin: auto;

	h1,
	h2,
	p {
		text-decoration: none;
		color: ${({ $theme }) =>
			$theme === 'light' ? colors.secondary : '#ffffff'};
	}
`;

const StyledBubbleHome = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 5rem;
	@media (max-width: 760px) {
		margin: 0rem;
	}
`;

export default function Home() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h1>Bonjour</h1>
			<p>
				Je suis Jonathan Vauvert, ans 28 , originaire de Nantes en
				France. J'ai commencé une formation en Octobre 2022 sur la
				plateforme en ligne d’OpenClassroom dans le but de me former au
				développement web de manière autonome et en distanciel.
			</p>
			<p>
				Ainsi au cours des derniers mois, j'ai développé des compétences
				sur les technologies suivantes :
			</p>
			<StyledBubbleHome>
				{Tech.map((element) => (
					<Bubble key={element} content={element} />
				))}
			</StyledBubbleHome>
		</StyledHome>
	);
}
