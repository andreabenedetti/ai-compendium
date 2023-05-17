import * as d3 from "d3";
import { useEffect, useState } from "react";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import styles from "./arXivTable.module.scss";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
    
    const columns = [
        { dataField: "title", text: "Title" },
        { dataField: "authors", text: "Authors" }
    ]
    
    return (
        <BootstrapTable 
        classes={ styles.tablePapers }
        keyField="title"
        data={ data }
        columns={ columns }
        pagination={ paginationFactory() }
        bordered={ false }
        />
        );
    }