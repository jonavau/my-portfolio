import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import colors from '../styles/utils/colors';

const StyledBubble = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	justify-content: center;
	transition: all 0.4s ease-out;
	border-radius: 3rem;
	margin: 2rem;
	transform: perspective(600px) rotateY(-40deg);
	background: ${({ $theme }) =>
		$theme === 'light' ? colors.secondary : colors.primary};
	color: ${({ $theme }) => ($theme === 'light' ? colors.primary : '#ffffff')};
	&:hover {
		transform: rotateY(0);
	}

	@media (max-width: 760px) {
		padding: 1.5rem;
		margin: 1.5rem;
	}
`;

export function Bubble({ content }) {
	const theme = useSelector(selectTheme);

	return <StyledBubble $theme={theme}>{content}</StyledBubble>;
}
