import styled from "styled-components";

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
	bottom: -100px;
	z-index: -1;
`;
export const ServicesCardContainer = styled.div`
	display: flex;
	width: var(--marque-width);
	height: 320px;
	margin: auto;
	overflow-x: hidden;
`;
export const CardContainer = styled.div`
	display: flex;
	animation: marquee var(--marque-animation-duration) linear infinite;

	:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(
				calc(-1 * var(--marque-element-width) * var(--marque-elements))
			);
		}
	}
`;
export const ServicesCard = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	border: 1px solid ${({ theme }) => theme.colors.orange};
	width: var(--marque-element-width);
	flex-shrink: 0;
	height: 300px;
	margin-right: 2rem;
	padding: 2rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	:last-child {
		margin-right: 0;
	}
	:hover {
		cursor: pointer;
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
