import styled from "styled-components";
import BgOne from "../../assets/images/first-plan-bg.png";

export const PlansContainer = styled.div`
	position: relative;
    overflow: hidden;
`;


export const PlansImageOne = styled.img`
	position: absolute;
	left: 0;
	top: 5rem;
	z-index: -1;
	width: 400px;
	height: auto;
`;

export const PlansImageTwo = styled.img`
	position: absolute;
	right: 0;
	top: 5rem;
	z-index: -1;
`;

export const PlansCardContainer = styled.div`
	margin: 3rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;
export const PlansCard = styled.div`
	background: url(${BgOne});
	background-size: cover;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	padding: 3rem 0;
	border-radius: 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
    margin-bottom: 2rem;

    @media (min-width: 1024px) {
        margin-right: 2rem;
        margin-bottom: 0;

        :last-child{
            margin-right: 0;
        }
    }
`;
export const PlansTitle = styled.p`
	font-weight: 700;
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;
export const SalesContainer = styled.div`
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.colors.orange};
`;
export const PlanMiniSale = styled.p`
	text-decoration: line-through;
	margin-bottom: 0.5rem;
`;
export const PlanSale = styled.p`
	font-size: 2.8rem;
	font-weight: 700;
`;
export const PlanCardContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 90%;
    margin-bottom: 2rem;
`;
export const PContentDesc = styled.p`
    margin: .5rem 0;
    color: #7a7a7a;
`;
