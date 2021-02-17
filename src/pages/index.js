import styled from 'styled-components';
import Head from "next/head";

import { IntroContainer, AboutContainer, GalleryContainer } from "../components/Container/";
import Banner from "../components/Banner";
import Nav from "../components/Menu/Nav";
import ScrollBackButton from "../components/ScrollBackButton";
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

      <ScrollBackButton />

      <IntroContainer id="sobre">
        <TextWrapper>
          <BlueTitle>Mais que uma escola</BlueTitle>
          <BoldParagraph>Um novo lugar, uma nova perspectiva, no Senai trocamos experiências, sonhos e inspirações. Veja nesse ensaio fotográfico, o diferencial que construímos ao longo desses 18 anos.</BoldParagraph>
        </TextWrapper>
      </IntroContainer>

      <GalleryContainer id="galeria">
        <GalleryTitle>Galeria</GalleryTitle>
        <Gallery></Gallery>
      </GalleryContainer>

      <AboutContainer id="senai"> 
        <SolidTextWrapper>
          <BlackTitle>O senai</ BlackTitle>
          <Paragraph>Com foco na tecnologia, o Senai de Informática há 18 anos vem preparando profissionais qualificados para o mercado de trabalho, além da excelência no ensino, prezamos pela empatia, bom relacionamento e parceria entre todos dentro da instituição.</Paragraph>
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
