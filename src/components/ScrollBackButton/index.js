import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../../assets/icons/back-to-top.svg";
import { Link, animateScroll } from "react-scroll";

const BackToTopButton = styled.div`
    background-image: url(${Icon});
    background-size: cover;
    height: 35px;
    width: 35px;
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    z-index: 1000;
    opacity: ${props => props.isVisible ? "100%" : "0%"};
    filter: drop-shadow(5px 5px 5px #00000050);

    transition: .4s;

    &:hover{
        cursor: pointer;
        transform: scale(0.9);
        filter: brightness(80%);
    }

    @media(min-width: 801px){
        height: 55px;
        width: 55px;
    }
`;

export default function ScrollBackButton() {
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setVisibility(true);
            } else {
                setVisibility(false);
            }
        });
    }, [])

    const scrollBack = () => {
        animateScroll.scrollToTop();
    }

    return <BackToTopButton isVisible={isVisible} onClick={() => scrollBack()} />
}