import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    min-height: 490px;
    background-image: url(${props => props.bg});
    background-color: #F0F0F0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 0;

    @media(max-width: 800px){
        min-height: 100vh;
        background-image: url(${props => props.mobileBg ? props.mobileBg : props.bg});
    }
`;

export default Section;