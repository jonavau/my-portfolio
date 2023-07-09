import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import colors from '../styles/utils/colors';

const StyledCard = styled.div`
	display: flex;
	align-items: start;
	padding: 2rem;
	width: 40%;
	justify-content: center;
	border-radius: 3rem;
	margin: 2rem;
	background: ${({ $theme }) =>
		$theme === 'light' ? colors.primary : colors.backgroundLight};
	transition: all 0.4s ease-out;
	h3 {
		text-align: center;
	}
	a,
	p {
		text-decoration: none;
		color: ${({ $theme }) => $theme !== undefined && colors.dark};
	}
	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0.5rem;
		padding: 0.5rem;
		p {
			display: flex;
			justify-content: center;
			align-items: center;
			color: ${({ $theme }) =>
				$theme === 'light' ? colors.primary : colors.backgroundLight};
			background-color: ${({ $theme }) =>
				$theme !== undefined && colors.dark};
			border-radius: 12px;
			padding: 0.5rem;
			margin: 0.5rem;
		}
	}

	@media (max-width: 760px) {
		width: 100%;
		margin: 0.5rem 0;
	}
`;

let keyNumber = 0;
function generateKey() {
	keyNumber += 1;
	return keyNumber.toString();
}

export function Card({ title, skills, description, id }) {
	const theme = useSelector(selectTheme);
	return (
		<StyledCard $theme={theme}>
			<Link to={`/Realisation/${id}`}>
				<h3>{title}</h3>
				<div className="tags">
					{skills.map((element) => (
						<p key={generateKey()}>{element}</p>
					))}
				</div>
				<p>{description}</p>
			</Link>
		</StyledCard>
	);
}
