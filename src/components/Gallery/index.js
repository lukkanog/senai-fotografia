import React, { useState } from "react";
import { Lightbox } from "react-modal-image";
import Image from 'next/image';

import ImageContainer from "./Image";
import GalleryGrid from "./styles";

import Img01 from "../../assets/img/gallery/img01.JPG";
import Img02 from "../../assets/img/gallery/img02.JPG";
import Img03 from "../../assets/img/gallery/img03.JPG";
import Img04 from "../../assets/img/gallery/img04.JPG";
import Img05 from "../../assets/img/gallery/img05.JPG";
import Img06 from "../../assets/img/gallery/img06.JPG";
import Img07 from "../../assets/img/gallery/img07.jpg";
import Img08 from "../../assets/img/gallery/img08.JPG";
import Img09 from "../../assets/img/gallery/img09.JPG";
import Img10 from "../../assets/img/gallery/img10.JPG";
import Img11 from "../../assets/img/gallery/img11.JPG";
import Img12 from "../../assets/img/gallery/img12.JPG";
import Img13 from "../../assets/img/gallery/img13.JPG";
import Img14 from "../../assets/img/gallery/img14.JPG";
import Img15 from "../../assets/img/gallery/img15.JPG";
import Img16 from "../../assets/img/gallery/img16.JPG";
import Img17 from "../../assets/img/gallery/img17.JPG";
import Img18 from "../../assets/img/gallery/img18.JPG";





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
                    <Photo alt="" src={Img01}/>
                    <Photo alt="" src={Img02}/>
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Img03} />
                    <Photo alt="" src={Img04} />
                </GalleryGrid.Column>

            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={Img06} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Img07} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={Img08} />
                    <Photo alt="" src={Img09} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Img10}/>
                    <Photo alt="" src={Img11}/>
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={Img12}/>
                    <Photo alt="" src={Img13}/>
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Img14} />
                    <Photo alt="" src={Img15} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={Img16} />
                    <Photo alt="" src={Img17} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={Img18} />
                    <Photo alt="" src={Img05} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

        </GalleryGrid>
    )
}

export default Gallery;
