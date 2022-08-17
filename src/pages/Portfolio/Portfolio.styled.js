import styled from "styled-components";
import SubCardBg from "../../assets/images/hover-bg.png";


export const PortfolioBg = styled.img`
	position: absolute;
	top: 100px;
	left: 100px;
`

export const PortfolioCardContainer = styled.div`
	display: flex;
	width: var(--marque-width);
	height: 370px;
	margin: auto;
	overflow-x: hidden;
`;
export const CardContainer = styled.div`
	display: flex;
	animation: marquee var(--marque2-animation-duration) linear infinite;

	:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(
				calc(-1 * var(--marque-element-width) * var(--marque2-elements))
			);
		}
	}
`;
export const PortfolioCard = styled.div`
	background-image: url(${({ image }) => image});
	background-position: center;
	background-size: cover;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	width: var(--marque-element-width);
	flex-shrink: 0;
	height: 350px;
	margin-right: 2rem;
	padding: 2rem;
	border-radius: 15px;
	position: relative;
	cursor: pointer;

	:last-child {
		margin-right: 0;
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
