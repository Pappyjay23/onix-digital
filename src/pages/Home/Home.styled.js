import styled from "styled-components";
import HomeBg from "../../assets/images/baner-dec-left.png";

export const HomeCover = styled.div`
	position: relative;
	background-image: url(${HomeBg});
	background-repeat: no-repeat;
`;

export const HomeContainer = styled.div`
	display: flex;
	position: relative;
	padding: 8rem 15px;
	height: 100vh;

	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 8rem 0 8rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;
export const HomeContent = styled.div`
	@media (min-width: 1024px) {
		width: 40%;
	}
	@media (min-width: 2560px) {
		width: 50%;
	}
`;
export const HomeHeading = styled.p`
	text-transform: uppercase;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.orange};
	margin-bottom: 2rem;
`;
export const HomeTitle = styled.h1`
	font-size: 3.2rem;
	line-height: 1.3;
	margin-bottom: 1.5rem;
`;
export const TitleSpan = styled.span`
	color: ${({ color }) => color};
`;
export const HomeDesc = styled.p`
	color: ${({ theme }) => theme.colors.dark};
	font-weight: 100;
	margin-bottom: 2rem;
	line-height: 1.7;
	font-size: 90%;
`;

export const HomeContactGroup = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

export const HomeLine = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
		margin-top: 0;
		margin-left: 2rem;
	}
`;
export const CallIcon = styled.div`
	background-color: ${({ theme }) => theme.colors.orange};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem;
	color: ${({ theme }) => theme.colors.white};
	margin-right: 0.5rem;
`;
export const HomeLineText = styled.p`
	font-size: 90%;
	color: ${({ theme }) => theme.colors.orange};
`;

export const HeroImageContainer = styled.div`
	display: none;
	@media (min-width: 1024px) {
		display: flex;
		width: 60%;
	}
`;
export const HeroImage = styled.img`
	position: absolute;
	right: 0;
	top: 0px;
	height: 500px;

	@media (min-width: 1440px) {
		height: 600px;
	}
	@media (min-width: 2560px) {
		height: 800px;
	}
`;
