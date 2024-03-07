import Head from 'next/head'
import Image from 'next/image'
import data from '../../data/automation';
import Link from 'next/link';
import { useEffect } from 'react';

import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import PlaceLoops from '../../components/PlaceLoops';
import Nav from '../../components/Sub';
import Legend from '../../components/Legend';
import Footer from '../../components/Footer';

const count = data.length;
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

export default function Home() {
  
  return (
    <>
    <Head>
    <title>Loops - AI Compendium</title>
    <meta name="description" content="The AI Compendium is a cartography of the reliance on human labor of Artificial Intelligence through humans-in-the-loop." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon-lg.png" />
    </Head>
    {console.log(count)}
    <Nav count = { count }/>
    <Container fluid className="mt-3 pb-5 mb-5">
    <Legend />
    <Row>
    <Row>
    <Col md={{ span: 8, offset: 2 }}>
      <h1>Loops</h1>
      <p>In this section are displayed the loops pertaining the articles that present applications of AI promising automation or enhancements in human labor through AI collaboration or AI support.</p>
      <p>A total of 35 articles are analyzed in detail to map the continuous loops of interaction between humans and AI that are described by the researchers. These loops are then represented consistently to provide a comparable view through schemas.</p>
    </Col>
    </Row>
    </Row>
    <Row>
    <Col md={{ span: 12 }}>
    <PlaceLoops cards={ data }/>
    </Col>
    </Row>
    <Footer />
    </Container> 
    </>
    )
  }