import React, { useState } from 'react';
import ScriptBar from "./ScriptBar";
import DesktopContainer from "./BuildSteps/DesktopContainer";
import DistroContainer from "./BuildSteps/DistroContainer";
import ApplicationContainer from "./BuildSteps/ApplicationContainer";
import EssentialContainer from "./BuildSteps/EssentialContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Row, Col, Button } from "reactstrap";


const PresetDisplay = () => {
    const [activeStep, setActiveStep] = useState(3);
    const steps = ["distro", "desktop", "application", "essential", "display"]

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }
    const prevStep = () => {
        setActiveStep(activeStep - 1);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-left" >
                        {activeStep !== 0 && 
                            <Button color="dark" onClick={prevStep}>
                                <FontAwesomeIcon icon={"arrow-left"} size="lg"/>
                                {" "}{" "}
                                Back
                            </Button>}
                    </Col>
                    <Col className="text-center"><h1>Choose your {steps[activeStep]}</h1></Col>
                    <Col className="text-right" >
                        {activeStep !== steps.length && 
                            <Button color="dark" onClick={nextStep}>
                                Next
                                {" "}{" "}
                                <FontAwesomeIcon icon={"arrow-right"} size="lg"/>
                            </Button>}
                    </Col>
                </Row>
            </Container>
            <br></br>
            <div style={{height: "450px"}}>
            {steps[activeStep] === "desktop" && <DesktopContainer />}
            {steps[activeStep] === "distro" && <DistroContainer />}
            {steps[activeStep] === "application" && <ApplicationContainer />}
            {steps[activeStep] === "essential" && <EssentialContainer />}
            </div>
            <ScriptBar />
        </div>
    )
}

export default PresetDisplay;