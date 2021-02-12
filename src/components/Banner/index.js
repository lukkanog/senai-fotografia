import styled from "styled-components";
import backgroundImg from "../../assets/img/banner.jpg";
import mobileBackgroundImg from "../../assets/img/mobile-banner.jpg";

const Banner = styled.div`
    min-height: 620px;
    width: 100%;
    background-image: url(${mobileBackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    /* position: absolute;
    top: 0; */

    @media(min-width: 801px){
        min-height: 120vh;
        background-image: url(${backgroundImg});
        background-position: top right;
    }

    @media(min-width: 1600px){
        min-height: 130vh;
        background-image: url(${backgroundImg});
        background-position: top right;
    }
`;

export default Banner;