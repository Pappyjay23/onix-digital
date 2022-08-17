import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins','Montserrat', sans-serif;
        scroll-behavior: smooth;
    }

    :root{
        --marque-width: 90vw;
        --marque-elements: 10;
        --marque2-elements: 12;
        --marque-elements-displayed: 1;
        --marque-element-width: calc(var(--marque-width)/var(--marque-elements-displayed));
        --marque-animation-duration: calc(var(--marque-elements) * 3s);
        --marque2-animation-duration: calc(var(--marque2-elements) * 3s);
    }

    @media (min-width:425px){
        :root{
        --marque-elements-displayed: 1.3;
    }
    }
    @media (min-width:768px){
        :root{
        --marque-elements-displayed: 2;
    }
    }

    @media (min-width:1024px){
        :root{
        --marque-width: 80vw;
        --marque-elements-displayed: 3;
    }
    }
    @media (min-width:1440px){
        :root{
        --marque-elements-displayed: 4;
    }
    }
    @media (min-width:2560px){
        :root{
        --marque-elements-displayed: 5;
    }
    }
`;
