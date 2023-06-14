import Head from 'next/head'
import data from '../../data/data';
import Link from 'next/link';
import { useEffect } from 'react';

import * as d3 from "d3";

import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Table } from 'react-bootstrap';
import Nav from '../../components/Sub';

const count = data.length;
const humanTasks = [];
const algoTasks = [];

export default function Home() { 
  
  data.forEach(d => {
    let hList = d.loop.filter(e => e.actor === "human" && e.type);
    hList.sort((a, b) => d3.descending(a.type, b.type));
    hList.forEach(t => humanTasks.push(t));
    
    let aList = d.loop.filter(e => e.actor === "algorithm" && e.type);
    aList.sort((a, b) => d3.descending(a.type, b.type));
    aList.forEach(t => algoTasks.push(t));
  });
  
  console.log(humanTasks)
  
  return (
    <>
    <Head>
    <title>shAI Compendium</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    {console.log(count)}
    <Nav count = { count }/>
    <Container fluid className="mt-3 pb-5 mb-5">
    <Row>
    <Col md={{ span: 2 }}>
    </Col>
    <Col md={{ span: 5 }}>
    <h4>Tasks performed by humans</h4>
    {
      humanTasks.map(task => (<><p><b>{task.type}, {task.title}</b><br />{task.label}</p></>))
    }    
    </Col>
    <Col md={{ span: 5 }}>
    <h4>Tasks performed by algorithms</h4>
    {
      algoTasks.map(task => (<><p><b>{task.title}</b><br />{task.label}</p></>))
    }
    </Col>
    </Row>
    </Container> 
    </>
    )
  }