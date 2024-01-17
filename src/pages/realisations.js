import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { RealisationCards } from '../components/realisations';
import colors from '../styles/utils/colors';

const StyledHome = styled.main`
	width: 95%;
	margin: auto;
	h1,
	h2,
	.note {
		text-decoration: none;
		color: ${({ $theme }) =>
			$theme === 'light' ? colors.secondary : '#ffffff'};
	}
`;

export default function Realisations() {
	const theme = useSelector(selectTheme);

	return (
		<StyledHome $theme={theme}>
			<h2>
				Voici quelques un des projets que j'ai réalisés et les
				compétences qu'ils m'ont permis de développer.
			</h2>
			<RealisationCards />
			<p className="note">
				*Retrouvez plus de projets sur mon{' '}
				<a
					href="https://github.com/greskelll"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>{' '}
			</p>
		</StyledHome>
	);
}
