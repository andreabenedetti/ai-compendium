import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BsQuestion } from 'react-icons/bs';
import Image from 'next/image';
import classNames from 'classnames';

import legendSvg from "../../public/legend.svg"

import legendStyles from "./Legend.module.scss";
import loopStyles from "../Loops/Loops.module.scss";


const popover = (
    <Popover id="popover-basic" className={legendStyles.legendPopup}>
    <Popover.Body>
        <p>Each card represents the process described in a scientific article mentioning machine learning or human-in-the-loop. In each article, <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillHuman)}>humans</Badge> have a <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillProblem)}>problem</Badge> that an <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillTechnology)}>algorithm</Badge> <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillPromise)}>promises</Badge> to solve using <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillData)}>data</Badge>.</p>
    <Image 
    src={legendSvg}
    width={250}
    alt="Diagram. Tasks on the left are performed by humans. The ones on the right by algorithms."
    className={"mt-3 mb-4"}
    ></Image>
    <p>Each article is described with a loop where tasks performed in the process, separated between <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillHuman)}>humans</Badge> and <Badge pill text={"dark"} className={classNames(loopStyles.pill, loopStyles.pillTechnology)}>algorithms</Badge>, and they are connected according to their order.</p>
    </Popover.Body>
    </Popover>
    );  
    
    export default function Legend() {
        return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className={legendStyles.help}><BsQuestion /></Button>
            </OverlayTrigger>
            )
        }