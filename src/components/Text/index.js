import styled from "styled-components";

const Title = styled.h2`
    font-size: 35px;
    font-weight: lighter;
    line-height: 125%;

    @media(min-width: 801px){
        font-size: 45px;
    }
`;

export const BlueTitle = styled(Title)`
    font-family: "Bungee Inline", sans-serif;
    color: #19EFFF;
`;

export const BlackTitle = styled(Title)`
    font-family: "Bungee Inline", sans-serif;
    color: #000;
`;

export const GalleryTitle = styled(Title)`
    font-family: "Bungee Shade", sans-serif;
    letter-spacing: 10px;
    color: #111;
`;


export const Paragraph = styled.p`
    width: 100%;
    font-size: 14px;
    line-height: 1.8;
    color: #000;
    font-family: "Poppins" , sans-serif;
    margin: .5em 0;

    @media(min-width: 801px){
        font-size: 16px;
    }
`;

export const BoldParagraph = styled(Paragraph)`
    font-family: "Bungee" , sans-serif;
    color: #ccc;
    opacity: 75%;
`;

