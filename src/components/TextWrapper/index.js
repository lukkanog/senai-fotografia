import styled from "styled-components";


export const TextWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    width: 90%;
    padding-bottom: 10em;

    @media(min-width: 801px){
        width: 700px;
        padding-bottom: unset;
    }
`;

const SolidBlock = styled(TextWrapper)`
    background-color: #F0F0F0;
    padding: 5%;
    box-shadow: -5 8 10 #09A6B3;
    transform-style: preserve-3d;

    @media(min-width: 801px){
        padding: 2.5% 5%;       
    }

`;

const BehindElement = styled.div`
        display: block;
        width: 100%;
        height: 100%;
        background-color: #19EFFF;
        position: absolute;
        top: 2.5%;
        right: 2.5%;

        transform: translateZ(-1px);
        
        @media(min-width: 801px){
            top: 5%;
        }
`;

export function SolidTextWrapper(props){
    return(
        <SolidBlock>
            {props.children}
            <BehindElement />
        </SolidBlock>
    )
}
