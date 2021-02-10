import styled from "styled-components";
import Icon from "../../../assets/icons/menu-icon.svg";

const MenuButton = styled.button`
    position: fixed;
    top: 78px;
    left: 5%;
    height: 36px;
    width: 36px;

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
        top: -75%;
        right: -100%;
        display: ${props => props.active ? null : "none"};
    }

`;




export default MenuButton;