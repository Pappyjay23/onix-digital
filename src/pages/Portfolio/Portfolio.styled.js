import styled from "styled-components";

export const PortfolioContainer = styled.div`
	padding: 3rem 15px;
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

export const PortfolioCardContainer = styled.div`
	display: flex;
	width: 95%;
	margin: 4rem auto 0 auto;
	overflow-x: scroll;
	&::-webkit-scrollbar{
		display: none;
	}
`;
export const CardContainer = styled.div`
	display: flex;
`
export const PortfolioCard = styled.div`
	background-image: url(${({image}) => image});
	background-position: center;
	background-size: cover;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	width: 270px;
	height: 350px;
	margin-right: 2rem;
	padding: 2rem;
	border-radius: 15px;

	:last-child{
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