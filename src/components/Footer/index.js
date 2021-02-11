import styled from "styled-components";

const Footer = styled.footer`
    background-color: #222222;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`;

Footer.Title = styled.h3`
    font-size: 16px;
    line-height: 1.6;

    &::after{
        content: "";
        display: block;
        margin: 4px 0 10px 0;
        height: 2px;
        background-color: #F24333;
    }
`;

Footer.Copyright = styled.p`
    font-size: 12px;
    font-family: "Poppins", sans-serif;

`;


export default Footer;
