import * as d3 from "d3";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import styles from "./arXivTable.module.scss";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSJoFZl3N8XOp9IBvDtzlOIFJkoOE84Bn3-Kcwqyz9Sie6qUn6-i5hMK9kqHwvyv-Hn-Z_kUk7bmXj/pub?gid=1508203728&single=true&output=csv"

export default function ArxivTable() {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        d3.csv(url).then((d) => {
            setData(d);
        });
        return () => undefined;
    }, []);
    
    return (
        <Table className={styles.papersTable}>
            <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Authors</th>
        </tr>
      </thead>
        <tbody>
        {data.map((line, i) => (
            <tr key={line.filename}>
            <td key={line.filename} className={styles.mono}>{i+1}</td>
            <td key={line.filename}><b>{line.title}</b></td>
            <td key={line.filename}>{line.authors}</td>
            </tr>)
            )}
            </tbody>
            </Table>
            );
        }