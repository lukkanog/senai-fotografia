import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    min-height: 490px;
    background-image: url(${props => props.bg});
    background-color: #111;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 800px){
        min-height: 100vh;
        background-image: url(${props => props.mobileBg ? props.mobileBg : props.bg});
    }
`;

export default Section;