import Head from 'next/head'
import data from '../../data/automation';
import Link from 'next/link';
import { useEffect } from 'react';

import * as d3 from "d3";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Tasks.module.css';

import { Container, Row, Col, Table, ListGroup, Accordion } from 'react-bootstrap';
import Nav from '../../components/Sub';
import ValuesList from '../../components/ListOfValues/Values';
import Footer from '../../components/Footer';

const count = data.length;
let humanTasks = [];
let algoTasks = [];

data.forEach(d => {
  if (d) {
    let hList = d.loop.filter(e => e.actor === "human" && e.type);
    hList.forEach(t => humanTasks.push(t));

    let aList = d.loop.filter(e => e.actor === "algorithm" && e.type);
    aList.forEach(t => algoTasks.push(t));
  }
});

humanTasks.sort((a, b) => d3.ascending(a.type, b.type))
algoTasks.sort((a, b) => d3.ascending(a.title, b.title))

export default function Home() { 
  
  return (
    <>
    <Head>
    <title>Tasks - AI Compendium</title>
    <meta name="description" content="The AI Compendium is a cartography of the reliance on human labor of Artificial Intelligence through humans-in-the-loop." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav count = { count }/>
    <Container fluid className="mt-3 pb-5 mb-5">
      <Row>
      <Col md={{ span: 8, offset: 2 }}>
      <h1>Tasks overview</h1>
      <p>The loops identified previously provide an article-by-article overview of how automation is achieved through the collaboration of humans and algorithms. However, tasks can also be looked at beyond their division by article: here are collected all tasks grouped only by the actor that is performing them, either a human or an algorithm.</p>
      </Col>
      </Row>
    <Row>
    <Col md={{ span: 6 }}>
    <h4 className={styles.title}>Tasks performed by humans</h4>
    <Table striped>
      <thead>
        <tr>
          <th>Human</th>
          <th>Task</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          humanTasks.map(task => (<tr key={task.title+task.label}><td>{task.type}</td><td>{task.title}</td><td>{task.label}</td></tr>))
        }
      </tbody>
    </Table>  
    </Col>
    <Col md={{ span: 6 }}>
    <h4 className={styles.title}>Tasks performed by algorithms</h4>
    <Table striped className={styles.taskList}>
    <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          algoTasks.map(task => (<tr key={task.title+task.label}><td>{task.title}</td><td>{task.label}</td></tr>))
        }
      </tbody>
    </Table>
    </Col>
    </Row>
    <Footer />
    </Container> 
    </>
    )
  }