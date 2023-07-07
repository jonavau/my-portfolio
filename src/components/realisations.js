import { Card } from './card';
import { projects } from '../assets/projects';
import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledRealisations = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

let keyNumber = 0;
function generateKey() {
	keyNumber += 1;
	return keyNumber.toString();
}

export function RealisationCards() {
	const theme = useSelector(selectTheme);
	const cards = projects;
	return (
		<StyledRealisations $theme={theme}>
			{cards.map((card) => (
				<Card
					key={generateKey()}
					title={card.title}
					link={card.link}
					skills={card.skills}
					description={card.description}
				/>
			))}
		</StyledRealisations>
	);
}
