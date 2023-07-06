import { styled } from 'styled-components';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';

const StyledBubble = styled.div`
	display: flex;
	align-items: center;
	padding: 2rem;
	justify-content: center;
	transition: all 0.4s ease-out;
	border-radius: 3rem;
	margin: 2rem;
	background: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#51d6aa')};
	color: ${({ $theme }) => ($theme === 'light' ? '#51d6aa' : '#ffffff')};
`;

export function Bubble({ content }) {
	const theme = useSelector(selectTheme);

	return <StyledBubble $theme={theme}>{content}</StyledBubble>;
}