import styled from "styled-components";


const GalleryGrid = styled.div`
    width: 90%;
    max-width: 1400px;
`;

GalleryGrid.Row = styled.div`
    display: flex;
    width: 100%;

    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1em, 0;

`;

GalleryGrid.Column = styled.div`
    width: 47.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px){
        width: 100%;
    }
`;

export default GalleryGrid;