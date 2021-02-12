import styled from 'styled-components';
import Head from "next/head";

import { IntroContainer, AboutContainer, GalleryContainer } from "../components/Container/";
import Banner from "../components/Banner";
import Nav from "../components/Menu/Nav";
import ButtonLink from "../components/Button";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

import { TextWrapper, SolidTextWrapper } from "../components/TextWrapper";
import {
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
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <header className="main-header">
        <Nav />
        <Banner />
      </header>

      <IntroContainer id="sobre">
        <TextWrapper>
          <BlueTitle>Mais que uma escola</BlueTitle>
          <BoldParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</BoldParagraph>
        </TextWrapper>
      </IntroContainer>

      <GalleryContainer id="galeria">
        <GalleryTitle>Galeria</GalleryTitle>
        <Gallery></Gallery>
      </GalleryContainer>

      <AboutContainer id="senai"> 
        <SolidTextWrapper>
          <BlackTitle>O senai</ BlackTitle>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo dapibus est at porttitor. Mauris suscipit convallis elit. Donec tristique convallis arcu sit amet viverra. Nam sit amet massa nunc. Nunc eget ipsum orci. Proin varius interdum ligula, ac blandit dolor accumsan sed. Vestibulum et gravida ante, vitae dignissim turpis.</Paragraph>
          <ButtonLink href="https://informatica.sp.senai.br/" target="_blank">Veja mais</ButtonLink>
        </SolidTextWrapper>
      </AboutContainer>

      <Footer>
        <Footer.Title>Escola Senai de Informática</Footer.Title>
        <Footer.Copyright>Copyright 2021 © Todos os direitos reservados.</Footer.Copyright>
      </Footer>

    </div>
  )
}
