import styled from 'styled-components';
import Head from "next/head";

import { IntroContainer, AboutContainer } from "../components/Container/";
import Banner from "../components/Banner";
import Nav from "../components/Menu/Nav";

import {
  TextWrapper,
  BlueTitle,
  BlackTitle,
  GalleryTitle,
  Paragraph,
  BoldParagraph,
} from "../components/Text";


export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>18 anos de SENAI | Escola SENAI de Informática</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <Nav />
      <Banner />

      <IntroContainer>
        <TextWrapper>
          <BlueTitle>Mais que uma escola</BlueTitle>
          <BoldParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur quis officia architecto, aspernatur fuga vero ipsum impedit repellat soluta nihil libero vitae praesentium perferendis facilis esse? Tempore, porro facere!</BoldParagraph>
        </TextWrapper>
      </IntroContainer>

      <AboutContainer>
      </AboutContainer>

    </div>
  )
}
