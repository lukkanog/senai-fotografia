import styled from 'styled-components';
import Head from "next/head";

import Container from "../components/Container";
import Banner from "../components/Banner";
import Nav from "../components/Menu/Nav";

import bg1 from "../assets/img/section-background.jpg"
import mobileBg from "../assets/img/mobile-section-background.jpg"


export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>18 anos de SENAI | Escola SENAI de Informática</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      </Head>

      <Nav />
      <Banner />

      <Container bg={bg1} mobileBg={mobileBg}>
      </Container>
      
      <Container>

      </Container>

      <Container>
        
      </Container>
      
    </div>
  )
}
