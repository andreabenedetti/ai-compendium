import Head from 'next/head';
import { useRef, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Figure } from 'react-bootstrap';
import Nav from '../../components/Sub';
import styles from '@/styles/Home.module.css';
import classNames from 'classnames';

import { construct } from '../../components/Loops/Loops.render';
import ArxivTable from '../../components/arXivTable';
import * as d3 from "d3";

import data from "../../data/data.js";

const logo = {
  loop: []
}

let steps = [3, 4, 5, 6, 7];
let length = steps[Math.floor(Math.random() * steps.length)];

for(let i = 0; i < length; i++) {
  let choice = Math.random();
  if (choice > 0.5) {
    logo.loop.push({
      actor: "human",
      index: i,
    })
  } else {
    logo.loop.push({
      actor: "algorithm",
      index: 6 - i,
    })
  }
}

export default function Home() {
  const svgEl = useRef();
  
  const height = 200;
  const radius = 50;
  const labels = true;
  
  useEffect(() => {
    construct(svgEl.current, logo.loop, svgEl.current.clientWidth, height, radius, labels);
  }, []);
  
  return (
    <>
    <Head>
    <title>shAI Compendium</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav/>
    <Container fluid className={styles.heroContainer}>
    <Row>
    <Col md={{ span: 12 }}>
    <h1 className={"text-center"}>shAI Compendium</h1>
    <svg ref={svgEl} width="100%" height={height} className={styles.homeSvg}></svg>
    </Col>
    </Row>
    </Container>
    
    <Container className={classNames("mt-4 pb-5 mb-5", styles.homeContainer)} >
    <Row>
    <Col><blockquote className={classNames("mb-5", styles.intro)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote></Col>
    </Row>
    <Row>
      <Col>
      <Figure>
        <Figure.Image 
        src={"/alluvial.png"} />
        <Figure.Caption className={styles.caption}>
          Artificial intelligence, Machine learning and Humans-in-the-loop are positioned as varied value propositions composed of problems, promises and complex engineered systems that use data to achieve them.
        </Figure.Caption>
      </Figure>
      </Col>
    </Row>
    <Row>
      <Col md={{ span: 8, offset: 4 }}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Col>
    </Row>
    <Row>
    <Col md={{ span: 8, offset: 4 }}>
    <ArxivTable className={"mt-2"}/>
    </Col>
    </Row>
    </Container> 
    </>
    )
  }
  