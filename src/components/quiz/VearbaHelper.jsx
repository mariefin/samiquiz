import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import VearbaTable from "./VearbaTable";

const VearbaHelper = ({satneLuohka, vearbaType, vearbaEnd}) => {
    let vearbaTempus;    
    const renderSatneLuohka = (satneLuohka) => {
        switch(satneLuohka) {
            case "ol1pres":
                vearbaTempus = "preesens";
                return "Yksikön ensimmäinen preesens";
            case "ol2pres":
                vearbaTempus = "preesens";
                return "Yksikön toinen preesens";
            case "ol3pres":
                vearbaTempus = "preesens";
                return "Yksikön kolmas preesens";
            case "gl1pres":
                vearbaTempus = "preesens";
                return "Kaksikon ensimmäinen preesens";
            case "gl2pres":
                vearbaTempus = "preesens";
                return "Kaksikon toinen preesens";
            case "gl3pres":
                vearbaTempus = "preesens";
                return "Kaksikon kolmas preesens";
            case "ml1pres":
                vearbaTempus = "preesens";
                return "Monikon ensimmäinen preesens";
            case "ml2pres":
                vearbaTempus = "preesens";
                return "Monikon toinen preesens";
            case "ml3pres":
                vearbaTempus = "preesens";
                return "Monikon kolmas preesens";
            case "ol1pret":
                vearbaTempus = "preteriti";
                return "Yksikön ensimmäinen preteriti";
            case "ol2pret":
                vearbaTempus = "preteriti";
                return "Yksikön toinen preteriti";
            case "ol3pret":
                vearbaTempus = "preteriti";
                return "Yksikön kolmas preteriti";
            case "gl1pret":
                vearbaTempus = "preteriti";
                return "Kaksikon ensimmäinen preteriti";
            case "gl2pret":
                vearbaTempus = "preteriti";
                return "Kaksikon toinen preteriti";
            case "gl3pret":
                vearbaTempus = "preteriti";
                return "Kaksikon kolmas preteriti";
            case "ml1pret":
                vearbaTempus = "preteriti";
                return "Monikon ensimmäinen preteriti";
            case "ml2pret":
                vearbaTempus = "preteriti";
                return "Monikon toinen preteriti";
            case "ml3pret":
                vearbaTempus = "preteriti";
                return "Monikon kolmas preteriti";
            case "presKielto":
                vearbaTempus = "preesens";
                return "Preesensin kieltomuoto";
            case "pretKielto":
                vearbaTempus = "preteriti";
                return "Preteritin kieltomuoto";
            case "perfPart":
                return "Perfektin partisiippi. On/oli + verbi"
            default:
                return "";
        }
    }
    return (
        <div>
        <p> {renderSatneLuohka(satneLuohka)} </p>
        <OverlayTrigger
            trigger="click"
            key="right"
            placement="right"
            rootClose
            overlay={
                <Popover id="popover-positioned-right">
                <Popover.Header as="h3">{vearbaTempus} {vearbaType}</Popover.Header>
                <Popover.Body>
                    <VearbaTable vearbaEnd={vearbaEnd} vearbaTempus={vearbaTempus} vearbaType={vearbaType}/>
                </Popover.Body>
                </Popover>
            }
            >
            <Button variant="secondary mb-2">Vihje</Button>
            </OverlayTrigger>
        </div>
    )
  }

export default VearbaHelper;