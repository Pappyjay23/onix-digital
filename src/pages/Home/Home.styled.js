import styled from "styled-components";
import HomeBg from "../../assets/images/baner-dec-left.png";

export const HomeCover = styled.div`
	position: relative;
	background-image: url(${HomeBg});
	background-repeat: no-repeat;
	@media (min-width: 768px) {
		height: 100vh;
	}
	@media (min-width: 2560px) {
		height: 60vh;
	}
`;

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 8rem 20px;
	height: 100%;

	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 8rem 0 8rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

export const HomeContentGroup = styled.div`
	display: flex;
`;

export const HomeContentCover = styled.div`
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: all 2s ease;
	transform: translateX(${({ active }) => (active ? 0 : "30px")});
	height: 550px;
	/* transform: scale(${({ active }) => (active ? 1.04 : 1)}); */

	@media (min-width: 425px) {
		height: 470px;
	}
	@media (min-width: 768px) {
		height: 350px;
	}
	@media (min-width: 1024px) {
		height: 420px;
	}
`;

export const HomeContentContainer = styled.div`
	@media (min-width: 1024px) {
		width: 450px;
		height: 100%;
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
	font-weight: 300;
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
	background: ${({ theme }) => theme.colors.orangeGrad};
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
	z-index: -1;

	@media (min-width: 1440px) {
		height: 600px;
	}
	@media (min-width: 2560px) {
		height: 800px;
	}
`;

export const HomeLinks = styled.div`
	margin-top: 1rem;
	display: flex;
	padding: 0 20px;

	@media screen and (max-width: 319px) {
		margin-top: 7rem;
	}
`;
export const HomeLink = styled.p`
	text-decoration: none;
	margin-right: 1.3rem;
	font-size: 1.4rem;
	color: ${({ active, theme }) =>
		active ? theme.colors.orange : theme.colors.dark};
	border-bottom: 3px solid
		${({ active, theme }) => (active ? theme.colors.orange : "transparent")};
`;
