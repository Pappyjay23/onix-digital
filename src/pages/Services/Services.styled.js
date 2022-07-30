import styled from "styled-components";

export const ServicesContainer = styled.div`
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
export const HeadingContainer = styled.div`
	margin-bottom: 3rem;
`;

export const ServicesLeftBg = styled.img`
	position: absolute;
	top: -100px;
	left: -80px;
	z-index: -1;
`;
export const ServicesRightBg = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -1;
`;
export const ServicesCardContainer = styled.div`
	display: flex;
	width: 95%;
	margin: 0 auto;
	height: 320px;
	overflow-x: scroll;
	&::-webkit-scrollbar{
		display: none;
	}
`;
export const CardContainer = styled.div`
	display: flex;
`
export const ServicesCard = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	border: 1px solid ${({theme}) => theme.colors.orange};
	width: 270px;
	height: 300px;
	margin-right: 2rem;
	padding: 2rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	:last-child{
		margin-right: 0;
	}
	@media screen and (min-width: 375px) {
		width: 320px;
	}
	@media screen and (min-width: 425px) {
		width: 370px;
	}
	@media screen and (min-width: 768px) {
		width: 320px;
	}
	@media screen and (min-width: 1024px) {
		width: 270px;
	}
`;
export const ServicesCardTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
`;
export const ServicesCardIcon = styled.div`
	font-size: 2rem;
	margin-bottom: 2.5rem;
	color: ${({ theme }) => theme.colors.orange};
`;
export const ServicesCardDesc = styled.p`
	font-size: 90%;
`;
