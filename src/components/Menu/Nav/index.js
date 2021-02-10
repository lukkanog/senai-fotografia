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
    background-image: linear-gradient(90deg, #4d0130 0%, rgba(255,255,255,0) 100%);
    width: 80vw;
    padding: 10vh 0 10vh 15vw;
    height: inherit;
    z-index: 0;
    transition: .5s;
    position: fixed;
    left: ${props => props.active ? "0vw" : "-100vw"};

`;

const StyledLink = styled.a`
    transition: .4s;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        color: #19EFFF;
    }
`;

function Nav(){

    const [ isActive, toggleMenu ] = useState(false);

    return (
        <StyledNav className="main-nav">
            <MenuButton onClick={() => {toggleMenu(!isActive)}} active={isActive}/>

            <StyledList active={isActive}>
                <li className="menu-item">
                    <StyledLink href="#intro">item 1</StyledLink>
                </li>
                <li className="menu-item">
                    <StyledLink>item 2</StyledLink>
                </li>
                <li className="menu-item">
                    <StyledLink>item 3</StyledLink>
                </li>
            </StyledList>
        </StyledNav>
    )
}

export default Nav;