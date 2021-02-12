import React, { useState } from "react";
import { Lightbox } from "react-modal-image";
import ImageContainer from "./Image";
import Image from 'next/image';
import GalleryGrid from "./styles";

import img01 from "../../assets/img/gallery/img01.jpg";
import img02 from "../../assets/img/gallery/img02.jpg";
import img03 from "../../assets/img/gallery/img03.jpg";
import img04 from "../../assets/img/gallery/img04.jpg";
import img06 from "../../assets/img/gallery/img06.jpg";
import img07 from "../../assets/img/gallery/img07.jpg";
import img08 from "../../assets/img/gallery/img08.jpg";
import img09 from "../../assets/img/gallery/img09.jpg";
import img10 from "../../assets/img/gallery/img10.jpg";
import img11 from "../../assets/img/gallery/img11.jpg";
import img12 from "../../assets/img/gallery/img12.jpg";
import img13 from "../../assets/img/gallery/img13.jpg";
import img14 from "../../assets/img/gallery/img14.jpg";
import img15 from "../../assets/img/gallery/img15.jpg";
import img16 from "../../assets/img/gallery/img16.jpg";
import img17 from "../../assets/img/gallery/img17.jpg";
import img18 from "../../assets/img/gallery/img18.jpg";





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
                    <Photo alt="" src={img01}/>
                    <Photo alt="" src={img02}/>
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={img03} />
                    <Photo alt="" src={img04} />
                </GalleryGrid.Column>

            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={img06} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={img07} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={img08} />
                    <Photo alt="" src={img09} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={img10}/>
                    <Photo alt="" src={img11}/>
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={img12}/>
                    <Photo alt="" src={img13}/>
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={img14} />
                    <Photo alt="" src={img15} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

            <GalleryGrid.Row>
                <GalleryGrid.Column>
                    <Photo alt="" src={img16} />
                    <Photo alt="" src={img17} />
                </GalleryGrid.Column>

                <GalleryGrid.Column>
                    <Photo alt="" src={img18} />
                </GalleryGrid.Column>
            </GalleryGrid.Row>

        </GalleryGrid>
    )
}

export default Gallery;
