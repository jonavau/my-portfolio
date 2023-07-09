import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import why from '../assets/project_img/argent_bank_3.PNG';

const StyledView = styled.div`
	width: 95%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export function DetailRealisation() {
	const navigate = useNavigate();
	const wantedId = useParams().id;
	const returnId = projects.filter((project) => project.id === wantedId);

	useEffect(() => {
		if (returnId[0] === undefined) {
			navigate('/Realisation');
		}
	});

	return (
		returnId[0] && (
			<StyledView>
				<h2>{returnId[0].title}</h2>
				<p>{returnId[0].description}</p>
				<>
					{returnId[0].pictures.map((img) => (
						<img src={img} />
					))}
				</>
			</StyledView>
		)
	);
}
