import styled from "styled-components";
import Icon from "../../../assets/icons/menu-icon.svg";

const MenuButton = styled.button`

    @media(max-width: 800px){
        display: hidden;
    }

    position: absolute;
    

    top: 35px;
    left: 5vw;
    height: 25px;
    width: 25px;

    background-color: unset;
    border: unset;
    outline: unset;

    z-index: 900;

    background-image: url(${Icon});
    background-size: cover;

    transform: scaleX(-1);
    transition: .4s;

    &:hover{
        cursor: pointer;
        transform: scaleX(-1) scale(0.8);
    }

    &::before{
        content: ">";
        font-size: 36px;
        color: #FF0075;
        position: absolute;
        top: -50%;
        right: -75%;
        display: ${props => props.active ? null : "none"};
        font-family: "Poppins", sans-serif;
        font-weight: bolder;
    }


    @media(min-width: 801px){
        top: 78px;
        left: 5vw;
        height: 36px;
        width: 36px;

        &::before{
            content: ">";
            font-size: 36px;
            color: #FF0075;
            position: absolute;
            top: -25%;
            right: -75%;
            display: ${props => props.active ? null : "none"};
            font-family: "Poppins", sans-serif;
            font-weight: bolder;
        }   
    }

    

`;



export default MenuButton;