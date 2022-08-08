import styled from "styled-components";

export const ProjectSection = styled.div`
	position: relative;
`;

export const LeftBg = styled.img`
	position: absolute;
	top: 0;
	left: 0;
`;
export const RightBg = styled.img`
	position: absolute;
	top: 0;
	right: 0;
`;

export const ProjectVideosCover = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;
export const VideoCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (min-width: 1024px) {
		width: 60%;
	}
`;

export const VideoCardCover = styled.div`
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: all 1s ease;
	transform: translateX(${({ active }) => (active ? 0 : "30px")});
`;

export const VideoCard = styled.div`
	background-image: url(${({ cardImg }) => cardImg});
	background-position: center;
	background-size: cover;
	height: 500px;
	width: 100%;
	background-color: #ddd;
	border-radius: 20px;
	margin-bottom: 4rem;
	@media (min-width: 1024px) {
		margin-bottom: 0;
		height: 600px;
	}
`;

export const VideoTag = styled.div`
	background: ${({ theme }) => theme.colors.orangeGrad};
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 2.5rem 1.5rem;
	width: 175px;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};

	@media (min-width: 768px) {
		width: 250px;
	}
`;

export const VidTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;
export const VidDesc = styled.p`
	font-size: 90%;
`;
export const ProjectIdCards = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
	@media (min-width: 1024px) {
		width: 35%;
		margin-left: auto;
	}
`;
export const ProjectIdCard = styled.div`
	background-image: url(${({ smallImg }) => smallImg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100px;
	border-radius: 20px;
	position: relative;
	margin-bottom: 1.5rem;
	cursor: pointer;

	@media (min-width: 350px) {
		width: 300px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 768px) {
		width: 300px;
	}
`;
export const ProjectIdTag = styled.div`
	background: ${({ theme }) => theme.colors.orangeGrad};
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 1rem 0.5rem;
	width: 200px;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
`;
export const IdTagTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
`;
export const ProjectIdOverlay = styled.div`
	background: ${({ theme }) => theme.colors.orangeGrad};
	border-radius: 20px;
	padding: 1rem;
	position: absolute;
	top: 0;
	height: 100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: all 0.5s ease;
`;
