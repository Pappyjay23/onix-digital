import styled from "styled-components";
import SubCardBg from "../../assets/images/hover-bg.png";


export const PortfolioBg = styled.img`
	position: absolute;
	top: 100px;
	left: 100px;
`

export const PortfolioCardContainer = styled.div`
	display: flex;
	width: 95%;
	margin: 4rem auto 0 auto;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const CardContainer = styled.div`
	display: flex;
`;
export const PortfolioCard = styled.div`
	background-image: url(${({ image }) => image});
	background-position: center;
	background-size: cover;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	width: 270px;
	height: 350px;
	margin-right: 2rem;
	padding: 2rem;
	border-radius: 15px;
	position: relative;
	cursor: pointer;

	:last-child {
		margin-right: 0;
	}
	@media screen and (min-width: 375px) {
		width: 320px;
		height: 440px;
	}
	@media screen and (min-width: 425px) {
		width: 370px;
		height: 490px;
	}
	@media screen and (min-width: 768px) {
		width: 320px;
	}
	@media screen and (min-width: 1024px) {
		width: 270px;
		height: 350px;
	}
`;

export const PortfolioSubCard = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-image: url(${SubCardBg});
	background-size: cover;
	background-position: center;
	height: 200px;
	width: 210px;
	border-top-left-radius: 30px;
	border-bottom-right-radius: 30px;
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	opacity: 0;
	transition: all .5s ease;

	${PortfolioCard}:hover &{
		opacity: 1;
	}
`;
export const PSubCardContent = styled.div`
	padding: 1rem 0;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
`;
export const PSubCardTitle = styled.p`
	font-weight: 700;
	font-size: 1.2rem;
`;
export const PSubCardDesc = styled.p`
	font-size: 90%;
`;
