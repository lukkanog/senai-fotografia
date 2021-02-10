import styled from "styled-components";

const ButtonLink = styled.a`
    font-size: 16px;
    color: #fff;
    background-color: #000;
    width: unset;
    padding: 0 1em;
    margin-top: 1em;
    text-align: center;
    align-self: center;
    transition: .25s;

    &:hover{
        background-color: #19eeff;
        color: #000;
        box-shadow: -5px 8px 10px #00000050;
        transform: translate(2px, -2px);
    }

    @media(min-width: 801px){
        align-self: flex-end;
    }
`;

export default ButtonLink;