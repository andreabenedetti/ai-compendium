import Head from 'next/head';
import { useRef, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Figure } from 'react-bootstrap';
import Nav from '../../components/Sub';
import styles from '@/styles/Home.module.css';
import classNames from 'classnames';

import Invocations from '../../components/Invocations';

import { construct } from '../../components/Loops/Loops.render';
import Footer from '../../components/Footer';
import ArxivTable from '../../components/arXivTable';
import * as d3 from "d3";

import data from "../../data/automation.js";

const count = data.length;

const logo = {
  loop: []
};

const css = `
.main-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 560;
  pointer-events: none;
  animation: animateDash 5s linear infinite forwards;
}

@keyframes animateDash {
  to {
    stroke-dashoffset: 150;
  }
}
`

let steps = [3, 4, 5, 6, 7];
let length = steps[Math.floor(Math.random() * steps.length)];

for(let i = 0; i < length; i++) {
  let choice = Math.random();
  let humans = logo.loop.filter(d => d.actor === "human");
  console.log(humans);
  
  if (choice > 0.5 && humans.length < 5) {
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
  
  const height = 180;
  const radius = 50;
  const labels = false;
  
  useEffect(() => {
    construct(svgEl.current, logo.loop, svgEl.current.clientWidth, height, radius, labels);
  }, []);
  
  return (
    <>
    <Head>
    <title>AI Compendium</title>
    <meta name="description" content="The AI Compendium is a cartography of the reliance on human labor of Artificial Intelligence through humans-in-the-loop." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon-lg.png" />
    </Head>
    <Nav count={ count }/>
    <Container fluid className={styles.heroContainer}>
    <Row>
    <Col md={{ span: 12 }}>
    <svg ref={svgEl} width="100%" height={height} className={styles.homeSvg}></svg>
    <h1 className={"text-center"}>AI Compendium</h1>
    <h3 className={"text-center"}>Mapping the reliance on human work of artificial intelligence</h3>
    </Col>
    </Row>
    </Container>
    
    <Container className={classNames("mt-4 pb-5 mb-5 pr-1", styles.homeContainer)} >
    <Row>
    <Col><blockquote className={classNames("mb-5", styles.intro)}>Artificial Intelligence is the latest frontier of technological development. Through concerted efforts, many actors have joined the field of AI development: from text-to-image generation to generative AI (both text based and image based), machine learning and deep learning algorithms are used extensively to provide predictive capabilities to a plethora of people. However, sometimes to achieve the promises that these new technologies paint, humans are still needed in the process. &quot;Humans-in-the-loop&quot; are figures that oversee what artificial system produce to assess and evaluate their correctness, their reliability, and their overall quality. Humans-in-the-loop take many shapes and form, from faceless annotators to experts, and finally to users. The <i>AI Compendium</i> maps this landscape of required human workers, and focuses on how they are still required to achieve automation, a big promise of artificial intelligence.</blockquote></Col>
    </Row>
    <Row>
    <Col>
    <Figure>
    <Figure.Image 
    src={"/alluvial-queries.png"} />
    <Figure.Caption className={styles.caption}>
    Composition of the queries used to collect the articles and the relative number of articles for each pairing.
    </Figure.Caption>
    </Figure>
    </Col>
    </Row>
    <Row>
    <Col md={{ span: 8, offset: 2 }}>
    <p>The research analyzes articles extracted from arXiv.org, a popular repository of scientific papers pertaining various domains of Engineering, such as Computer Science, Information Theory, or Natural sciences. The articles are collected using a combination of keywords identifying terms and technologies, as explained in figure 1.</p>
    <Figure>
    <Figure.Image 
    src={"/areas-to-query.png"} />
    <Figure.Caption className={styles.caption}>
    Articles collected from arXiv refer to knowledge areas. These knowledge areas appeared in the various query to compose the initial dataset.
    </Figure.Caption>
    </Figure>
    <p>However, while a portion of the collection tried to extract more design-centric approaches to AI, the overwhelming majority populates the engineering-centric sphere of queries, given also the nature of the platform analyzed which primarily caters to hard sciences rather than other disciplines.</p>
    <Figure>
    <Figure.Image 
    src={"/the-loops.png"} />
    <Figure.Caption className={styles.caption}>
    Actors in the loop are already varied from the various appellatives found in the abstracts of the papers. Irrelevant appellatives are colored in red.
    </Figure.Caption>
    </Figure>
    <p>Finally, humans-in-the-loop appear already to be more varied than just &quot;humans&quot;: while this particular framing develops from a long literature in the domain of Control systems (eg. pilots and industrial processes), in the development of artificial intelligence various kinds of humans are invoked to participate in the development and maintenance of AI: from experts to non-experts, &quot;humans-in-the-loop&quot; is a collective term that mobilizes different pockets of society depending on the needs of the AI systems.</p>
    </Col>
    </Row>
    <Row>
    <Col><blockquote className={classNames("mb-5", styles.intro)}>A recurring pattern that emerge from the corpus of articles is a clear structure of problem, a promise of a solution to such problem, data required to achieve this promise and a human that would intervene. We call this structure &quot;invocation&quot;: humans are invoked to participate in the construction of AI to solve a plethora of problems that AI promises to achieve, albeit not alone.</blockquote></Col>
    </Row>
    <Row>
    <Col>
    <Invocations />
    </Col>
    </Row>
    <Row>
    <Col md={{ span: 8, offset: 4 }}>
    </Col>
    </Row>
    <Row>
    <Col md={{ span: 8, offset: 2 }}>
      <p>The analysis of these invocations provides an overview of 25 different categories of human actors that are invoked in the corpus of articles. These humans are framed as humans-in-the-loop, or controllers that provide the machines with some sort of input in the shape of data. Compared to other domains of Control systems theory, here humans-in-the-loop are not necessarily experts in the field of AI, but they can be either experts of a specific field (like medical applications), or non-experts in any particular field.</p>
      <p>Moreover, the input that these humans-in-the-loop give to the machines is highly varied, but it can be categorized in four main groups: audio, text, images, and interactions with the system. Audio is primarily concerned with recordings, text includes instances of written articles or textual inputs from users, images include both photographs and medical imagery, and interactions with the system include both logs of previous interactions and data collected through specific sensors, like brain waves and others.</p>
      <p>Finally, a relevant aspect that will be deepened in the website is the one concerning automation and human-AI collaboration. Indeed, the presence of &quot;users&quot; as humans-in-the-loop signals an interest of transferring knowledge generated in this academic context into everyday situations in which AI is deemed as useful. A recurring framing that emerges from the corpus is how AI will impact labor by automating either portions or the entirety of complex processes. Another way to frame it is the collaboration between humans and AI, where the latter operates autonomously until input from the former is required to proceed.</p>
    </Col>
    </Row>
    <Row>
    <Col md={12}>
    <ArxivTable className={"mt-2"}/>
    </Col>
    </Row>
    <Footer />
    </Container>
    <style>{css}</style>
    </>
    )
  }
  