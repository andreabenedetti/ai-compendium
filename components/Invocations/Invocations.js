import { Carousel, Figure } from "react-bootstrap";
import invocations from "../../data/invocations";
import Image from "next/image";
import styles from "./Invocations.module.css";

export default function Invocations() {
    
    console.log(invocations);
    return(
        <Carousel fade className={styles.carousel}>
        {invocations.map(invocation => {
            console.log(invocation)
            return <Carousel.Item key={invocation}>
            <Figure.Image 
            src={`/invocations/${invocation}`} />
            </Carousel.Item>
        })}
        </Carousel>
        )
    };