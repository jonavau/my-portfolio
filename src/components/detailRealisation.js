import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';
import { useEffect } from 'react';
import { selectTheme } from '../utils/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/* import { useParallax, useParallaxController } from 'react-scroll-parallax'; */
import { styled } from 'styled-components';
import colors from '../styles/utils/colors';
import Carousel from './caroussel';

const StyledView = styled.div`
	width: 95%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	h1,
	h2,
	a,
	p {
		margin: 1rem;
		text-decoration: none;
		color: ${({ $theme }) =>
			$theme === 'light' ? colors.secondary : '#ffffff'};
	}
	.detailPageLink {
		font-weight: 700;
	}
`;
const StyledViewBis = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	margin: auto;
`;

export function DetailRealisation() {
	const navigate = useNavigate();
	const wantedId = useParams().id;
	const returnId = projects.filter((project) => project.id === wantedId);
	const ActualProject = returnId[0];
	const theme = useSelector(selectTheme);
	/* 	const parallaxController = useParallaxController();
	const parallax = useParallax({
		speed: 10,
	}); */
	useEffect(() => {
		if (ActualProject === undefined) {
			navigate('/Realisation');
		}
	});

	return (
		ActualProject && (
			<StyledView $theme={theme}>
				<h2>{ActualProject.title}</h2>
				<StyledViewBis>
					<p>{ActualProject.bigDescription}</p>
				</StyledViewBis>
				<a
					className="detailPageLink"
					href={ActualProject.link}
					target="_blank"
					rel="noreferrer"
				>
					Visitez le git de ce projet.
				</a>
				<Carousel project={ActualProject} />
				<Link className="detailPageLink" to={'/Realisation'}>
					Retour aux réalisations
				</Link>
			</StyledView>
		)
	);
}
