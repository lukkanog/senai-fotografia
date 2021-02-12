import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../../../assets/icons/menu-icon.svg";

const MenuIcon = styled.button`

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


    background-image: url(${Icon});
    background-size: cover;

    transform: scaleX(-1);
    opacity: ${props => props.scroll ? "100%" : "0%"};
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
        top: ${props => props.scroll && !props.active ? "2.5vh" : "78px"};
        left: ${props => props.scroll && !props.active ? "1vw" : "5vw"};
        height: 36px;
        width: 36px;
        opacity: 100%;


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

function MenuButton(props) {

    const [changeOnScroll, setChangeOnScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setChangeOnScroll(true);
            } else {
                setChangeOnScroll(false);
            }
        });
    },[])
    

    return <MenuIcon scroll={changeOnScroll} active={props.active} />

}



export default MenuButton;