import React, { useRef, useEffect, useState } from "react";

import { Form } from "react-bootstrap";
import styles from "./Values.module.scss";
import * as d3 from "d3";

export default function ValuesList( data ) {
    let humansList = [];
    let problemsList = [];
    let promisesList = [];
    let dataList = [];
    
    console.log(data);
    
    data.data.forEach(d => {
        d.value.humans.forEach(h => {
            humansList.push(h);
        });
        
        d.value.problems.forEach(p => {
            problemsList.push(p);
        });
        
        d.value.promises.forEach(p => {
            promisesList.push(p);
        });
        
        d.value.data.forEach(d => {
            dataList.push(d);
        });
    });
    
    let humans = humansList.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => d3.ascending(a, b));
    let problems = problemsList.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => d3.ascending(a, b));
    let datas = dataList.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => d3.ascending(a, b));
    let promises = promisesList.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => d3.ascending(a, b));
    
    let value = [humans, problems, promises, datas];
    let vocabulary = ["humans", "problems", "promises", "data"]
    
    console.log(value);

    const [type, setType] = useState("-");
    
    return (
        <Form.Group className={styles.valueList}>
        {
            value.map((v, i) => (
                <>
                <Form.Label>Select {vocabulary[i]}</Form.Label>
                <Form.Select 
                    controlId={vocabulary[i]}
                    style={{marginBottom: "0.5rem"}}
                    onChange={e => {
                        console.log("Filter by", e.target.value.split(" ")[0]);
                        setType(e.target.value.split(" ")[0]);
                    }}
                >
                    <option>-</option>
                {
                    v.map(l => (
                        <option key={l} value={`${l} ${vocabulary[i]}`}>{l}</option>
                        ))
                    }
                    </Form.Select>
                    </>
                    ))
                }
                </Form.Group>
                )
            }