import styled from 'styled-components';
import Head from "next/head";

import Banner from "../components/Banner";
import Nav from "../components/Menu/Nav";



export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>18 anos de SENAI | Escola SENAI de Informática</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      </Head>

      <Nav />
      <Banner />

      
    </div>
  )
}
