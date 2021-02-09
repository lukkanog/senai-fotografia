import styled from "styled-components";
import React, { useState, useEffect} from "react";
import MenuButton from "../MenuButton";

const StyledNav = styled.nav`
    position: fixed;
    height: 100vh;
    z-index: 1000;

`;

const StyledList = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    background-image: linear-gradient(90deg, #5f043b 0%, rgba(255,255,255,0) 100%);
    width: 650px;
    padding-left: 10vw;
    height: inherit;
    z-index: 0;
    transition: .5s;
    position: fixed;
    left: ${props => props.active ? "0vw" : "-100vw"};

`;

function Nav(){

    const [ isActive, toggleMenu ] = useState(false);

    return (
        <StyledNav className="main-nav">
            <MenuButton onClick={() => {toggleMenu(!isActive)}}/>

            <StyledList className="menu-options" active={isActive}>
                <li className="menu-item">a</li>
                <li className="menu-item">n</li>
                <li className="menu-item">c</li>
            </StyledList>
        </StyledNav>
    )
}

export default Nav;