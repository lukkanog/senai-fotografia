import styled from "styled-components";
import Banner from "../../assets/img/banner.jpg";
import Image from "./Image";
import mobileBackgroundImg from "../../assets/img/mobile-banner.jpg";



const GalleryGrid = styled.div`
    width: 90%;
    /* height: auto; 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 800px);
    grid-gap: 15px;
    background-color: #ddd;
    margin:1em 0;
    line-height: 0;
    grid-auto-flow: dense; */


    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:1em 0;

`;



function Gallery(){
    return(
        <GalleryGrid>
            <Image src={mobileBackgroundImg} />
            <Image src={Banner} />
            <Image src={Banner} />
            <Image src={mobileBackgroundImg} />
            <Image src={Banner} />
            <Image src={Banner} />

        </GalleryGrid>
    )
}

export default Gallery;
