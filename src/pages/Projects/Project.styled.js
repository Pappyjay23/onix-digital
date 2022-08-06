import styled from "styled-components";
import Image from "../../assets/images/video-thumb-01.png";

export const ProjectContainer = styled.div`
	padding: 5rem 15px;
	position: relative;
	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;
export const ProjectVideosCover = styled.div`
	display: flex;
	flex-direction: column;
`;
export const VideoCard = styled.div`
	height: 500px;
	width: 100%;
	background-color: #ddd;
	border-radius: 20px;
	margin-bottom: 4rem;
`;

export const VideoTag = styled.div`
	background: ${({ theme }) => theme.colors.orangeGrad};
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
	padding: 2.5rem 1.5rem;
	width: 175px;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
`;

export const VidTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;
export const VidDesc = styled.p`
	font-size: 90%;
`;
export const ProjectIdCards = styled.div``;
export const ProjectIdCard = styled.div`
	background-image: url(${Image});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100px;
	border-radius: 20px;
	position: relative;
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
	color: ${({theme}) => theme.colors.white};
	opacity: 0;
`;
