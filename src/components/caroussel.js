import { useState } from 'react';
import { styled } from 'styled-components';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import { selectTheme } from '../utils/selectors';
import { useSelector } from 'react-redux';
import colors from '../styles/utils/colors';

const CarouselStyled = styled.div`
	position: relative;
	width: 100%;
	border-radius: 25px;
	background: ${({ $theme }) =>
		$theme === 'light' ? colors.primary : colors.secondary};
`;

const CarouselImg = styled.img`
	width: 100%;
	height: 40rem;
	object-fit: contain;
	border-radius: 25px;
	@media (max-width: 800px) {
		height: 30rem;
	}
	@media (max-width: 640px) {
		height: 22rem;
	}
	z-index: 1;
`;

const CarouselFondu = styled.div`
	width: 100%;
	position: absolute;
	height: 40rem;
	object-fit: contain;
	border-radius: 25px;
	@media (max-width: 800px) {
		height: 30rem;
	}
	@media (max-width: 640px) {
		height: 22rem;
	}
	z-index: 2;
	background-color: invisible;
	box-shadow: inset 0 0 45px 30px white;
`;

const LeftArrow = styled.img`
	position: absolute;
	height: 60px;
	top: 45%;
	left: 0rem;
	cursor: pointer;
	@media (max-width: 1024px) {
		height: 40px;
		top: 50%;
	}
	@media (max-width: 640px) {
		height: 22px;
		top: 50%;
	}
	z-index: 3;
`;

const RightArrow = styled.img`
	position: absolute;
	top: 45%;
	height: 60px;
	right: 0rem;
	cursor: pointer;
	@media (max-width: 1024px) {
		height: 40px;
		top: 50%;
	}
	@media (max-width: 640px) {
		height: 22px;
		top: 50%;
	}
	z-index: 3;
`;

const PicNum = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 50%;
	color: teal;
	font-size: 18px;
	@media (max-width: 1024px) {
		display: none;
	}
	z-index: 3;
`;

function Carousel({ project }) {
	const [index, updateIndex] = useState(0);
	const theme = useSelector(selectTheme);
	return project.pictures.length > 1 ? (
		<CarouselStyled $theme={theme}>
			<CarouselFondu></CarouselFondu>
			<CarouselImg
				alt={project.description}
				src={project.pictures[index]}
			></CarouselImg>
			<LeftArrow
				onClick={
					index === 0
						? () => updateIndex(index + project.pictures.length - 1)
						: () => updateIndex(index - 1)
				}
				src={leftArrow}
				alt="flèche gauche"
			></LeftArrow>
			<RightArrow
				onClick={
					project.pictures[index + 1] !== undefined
						? () => updateIndex(index + 1)
						: () => updateIndex(index - project.pictures.length + 1)
				}
				src={rightArrow}
				alt="flèche droite"
			></RightArrow>
			<PicNum>
				{[index + 1]}/{project.pictures.length}
			</PicNum>
		</CarouselStyled>
	) : (
		<CarouselImg
			alt={project.description}
			src={project.pictures}
		></CarouselImg>
	);
}

export default Carousel;
