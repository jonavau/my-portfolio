import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';
import { useEffect } from 'react';
import { selectTheme } from '../utils/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import colors from '../styles/utils/colors';

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
`;
const StyledViewBis = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	p {
		width: 100%;
	}
`;
const StyledViewImg = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin: 5rem;
	@media (min-width: 1500px) {
		margin: 0rem;
	}
	@media (max-width: 760px) {
		margin: 0rem;
	}
`;

const ImgBox = styled.div`
	width: 100%;
	max-width: 1024px;
	border-radius: 3rem;
	z-index: 1;
	img {
		border: 2px solid #e3e8f4;
		border-radius: 16px;
		display: block;
		margin: 1rem auto;
		max-width: 100%;
	}
	@media (max-width: 760px) {
		width: 100%;
	}
`;

export function DetailRealisation() {
	const navigate = useNavigate();
	const wantedId = useParams().id;
	const returnId = projects.filter((project) => project.id === wantedId);
	const ActualProject = returnId[0];
	const theme = useSelector(selectTheme);

	useEffect(() => {
		if (ActualProject === undefined) {
			navigate('/Realisation');
		}
	});

	return (
		returnId[0] && (
			<StyledView $theme={theme}>
				<h2>{ActualProject.title}</h2>
				<StyledViewBis>
					<p>{ActualProject.bigDescription}</p>
					<StyledViewImg>
						{ActualProject.pictures.map((img) => (
							<>
								<ImgBox>
									<img
										src={img}
										alt="capture d'ecran du projet disponible sur github"
									/>
								</ImgBox>
							</>
						))}
					</StyledViewImg>
				</StyledViewBis>
				<a href={ActualProject.link} target="_blank" rel="noreferrer">
					Visitez le git de ce projet.
				</a>
				<Link to={'/Realisation'}>Retour aux réalisations</Link>
			</StyledView>
		)
	);
}
