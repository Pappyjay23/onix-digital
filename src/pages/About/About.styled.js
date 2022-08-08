import styled from "styled-components";

export const AboutFlexContainer = styled.div`
	@media screen and (min-width: 1024px) {
        display: flex;   
    }
`;
export const AboutImageContainer = styled.div`
   @media screen and (min-width: 1024px) {   
        width: 40%;
    }
`;
export const AboutImage = styled.img`
    width: 100%;
    height: auto;
`;
export const AboutContentContainer = styled.div`
    @media screen and (min-width: 1024px) {
        width: 55%; 
        margin-left: auto;
    }
`;

export const AboutSectionDesc = styled.p`
    margin-top: 2rem;
    font-size: 90%;
    line-height: 1.8;
`

export const AboutCardContainer = styled.div`
    margin: 1rem 0;
    @media screen and (min-width:1024px) {
        display: flex;
    }
`
export const AboutCard = styled.div`
    text-align: center;
    margin: 3rem 0;
    @media screen and (min-width:1024px) {
        margin: 1rem 0;
        margin-right: .7rem;
    }
`
export const AboutCardIcon = styled.img``
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
    border-top: 1px solid #e0e0e0;
    padding-top: 1rem;
    line-height: 1.8;
    @media screen and (min-width:1024px) {
        font-size: 85%;
    }
`
