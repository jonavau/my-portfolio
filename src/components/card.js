import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledCard = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	width: 40%;
	justify-content: center;
	border-radius: 3rem;
	margin: 2rem;
	background: ${({ $theme }) => ($theme === 'light' ? '#51d6aa' : '#51d6aa')};
	transition: all 0.4s ease-out;
	a,
	p {
		text-decoration: none;
		color: ${({ $theme }) => ($theme === 'light' ? '#1c1f1e' : '#ffffff')};
	}

	@media (max-width: 760px) {
		width: 100%;
	}
`;

let keyNumber = 0;
function generateKey() {
	keyNumber += 1;
	return keyNumber.toString();
}

export function Card({ title, skills, description, link }) {
	const theme = useSelector(selectTheme);
	return (
		<StyledCard $theme={theme}>
			<a href={link}>
				<h3>{title}</h3>
				<ul>
					{skills.map((element) => (
						<li key={generateKey()}>{element}</li>
					))}
				</ul>
				<p>{description}</p>
			</a>
		</StyledCard>
	);
}
