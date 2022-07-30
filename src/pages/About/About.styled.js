import styled from "styled-components";

export const AboutContainer = styled.div`
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

export const AboutFlexContainer = styled.div`
	@media screen and (min-width: 1024px) {
        display: flex;   
    }
`;
export const AboutImageContainer = styled.div`
   @media screen and (min-width: 1024px) {   
        width: 50%;
    }
`;
export const AboutImage = styled.img`
    width: 100%;
    height: auto;
`;
export const AboutContentContainer = styled.div`
    @media screen and (min-width: 1024px) {
        width: 50%;   
    }
`;

export const AboutSectionDesc = styled.p`
    margin-top: 2rem;
    font-size: 90%;
    line-height: 1.8;
`

export const AboutCardContainer = styled.div`
    margin: 3rem 0;
`
export const AboutCard = styled.div`
    text-align: center;
    margin: 3rem 0;
`
export const AboutCardIcon = styled.div``
export const AboutCardAmount = styled.p`
    font-size: 3rem;
    font-weight: 700;
`
export const AboutCardTitle = styled.p`
    font-size: 90%;
    color: ${({theme}) => theme.colors.orange};
    margin-bottom: 1rem;
`
export const AboutCardDesc = styled.p`
    font-size: 95%;
    border-top: 1px solid #dedede;
    padding-top: 1rem;
    line-height: 1.7;
`
