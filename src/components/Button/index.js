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

    @media(min-width: 801px){
        align-self: flex-end;
    }
`;

export default ButtonLink;