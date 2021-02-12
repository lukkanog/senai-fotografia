import styled from "styled-components";
import Image from 'next/image';


const GalleryItem = styled.div`
   width: 100%;
   height: auto;
   

`;


export default function GalleryImage(img) {
    return (
        <GalleryItem type={img.type}>
            <Image
                layout="fill"
                alt={img.alt}
                src={img.src} />
        </GalleryItem>
    )
}