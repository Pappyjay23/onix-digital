import styled from "styled-components";

export const SectionTitle = styled.h3`
    text-transform: capitalize;
    font-size: 1.9rem;
    text-align: center;
    width: 100%;
    
    @media screen and (min-width: 425px) {
        width: ${({widthSmall}) => widthSmall ? '65%' : '100%'};
        margin: 0 auto;
    }
`
export const SectionSubTitle = styled.h3`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -1px;
    color: ${({theme}) => theme.colors.orange};
    opacity: .2;
    width: 100%;
`