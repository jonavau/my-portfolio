import * as themeActions from '../features/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../utils/selectors';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	border-top: 2px solid #ccc;
	padding: 2rem 0 1.5rem;
	height: 2.5rem;
	color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};

	button {
		border: none;
		background: none;
		cursor: pointer;
	}
`;

export function Footer({ website }) {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();
	return (
		<StyledFooter $theme={theme}>
			<p className="footer-text">
				{new Date().getFullYear()} {website}
			</p>
			<button onClick={() => dispatch(themeActions.toggle())}>
				{theme === 'light' ? '🌒' : '🌞'}
			</button>
		</StyledFooter>
	);
}
