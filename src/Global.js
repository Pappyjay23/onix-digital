import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat','Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    .slide {
        opacity: 0;
        transition-duration: 2s ease;
    }

    .slide.active{
        opacity: 1;
        transition-duration: 2s;
        transform: scale(1.04);
        ${'' /* transform: translateX(-30px); */}
    }
`;
