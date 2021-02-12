import styled from "styled-components";
import Image from 'next/image';

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.type === "vertical" ? "728px" : "394px"};
    margin: 1em 0;
    transition: .4s;
    background-color: #C4C4C4;


    &:hover{
        cursor: pointer;
        transform: scale(0.97);
    }

    @media(max-width: 800px){
        width: 100%;
        height: ${props => props.type === "vertical" ? "488px" : "215px"};
        margin: 5px 0;

    }
`;

export default ImageContainer;