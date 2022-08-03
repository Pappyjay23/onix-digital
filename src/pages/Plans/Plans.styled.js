import styled from "styled-components";

export const PlansContainer = styled.div`
	position: relative;
`;

export const PlansContent = styled.div`
	padding: 3rem 15px;
	@media screen and (min-width: 768px) {
		padding: 1.5rem 30px;
	}

	@media screen and (min-width: 1024px) {
		padding: 1.5rem 50px;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

export const PlansImageOne = styled.img`
	position: absolute;
	left: 0;
	top: 5rem;
	width: 300px;
	height: auto;
    @media screen and (max-width: 320px) {
        width: 200px;
    }
`;

export const PlansImageTwo = styled.img`
	position: absolute;
	right: 0;
	top: 5rem;
`;

export const PlansCardContainer = styled.div``
export const PlansCard = styled.div``
export const PlansTitle = styled.p``
export const SalesContainer = styled.div``
export const PlanMiniSale = styled.p``
export const PlanSale = styled.p``
export const PlanCardContents = styled.div``
export const PContentDesc = styled.p``