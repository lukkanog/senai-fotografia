import React, { useState } from "react";
import styled from "styled-components";
import { Lightbox } from "react-modal-image";
import Banner from "../../assets/img/banner.jpg";
import Image from 'next/image';
import mobileBackgroundImg from "../../assets/img/mobile-banner.jpg";


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

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.type === "vertical" ? "728px" : "394px"};
    margin: 1em 0;
    transition: .4s;
    background-color: #C4C4C4;


    &:hover{
        cursor: pointer;
        transform: scale(0.97);
    }

    @media(max-width: 800px){
        width: 100%;
        height: ${props => props.type === "vertical" ? "488px" : "215px"};
        margin: 5px 0;

    }
`;


function Gallery() {

    const Photo = (img) => {
        return (
            <ImageContainer type={img.type} onClick={() => setLightbox(img.src)}>
                <Image objectFit="cover" src={img.src} alt={img.alt} layout="fill" quality={100} />
            </ImageContainer>
        )
    }
    

    const [lightbox, setLightbox] = useState(null);

    return (
        <GalleryGrid>

            {lightbox ?
                <Lightbox large={lightbox} onClose={() => setLightbox(false)} />
            : null}

            <GalleryGrid.Row>

                <GalleryGrid.Column>
                    <Photo alt="" src={Banner}/>
                    <Photo alt="" src={Banner}/>
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Banner} />
                    <Photo alt="" src={Banner} />
                </GalleryGrid.Column>

            </GalleryGrid.Row>

            <GalleryGrid.Row>

                <GalleryGrid.Column>
                    <Photo alt="" src={Banner} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Banner} />
                </GalleryGrid.Column>

            </GalleryGrid.Row>

            <GalleryGrid.Row>

                <GalleryGrid.Column>
                    <Photo alt="" src={Banner} />
                    <Photo alt="" src={Banner} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={mobileBackgroundImg} type="vertical" />
                </GalleryGrid.Column>

            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <Photo alt="" src={Banner}/>
            </GalleryGrid.Row>


        </GalleryGrid>
    )
}

export default Gallery;
