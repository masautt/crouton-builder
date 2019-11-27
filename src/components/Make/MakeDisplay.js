import React, { useState } from 'react';
import ScriptBar from "./ScriptBar";
import DesktopContainer from "./DesktopContainer";
import DistroContainer from "./DistroContainer";
import ApplicationContainer from "./ApplicationContainer";
import EssentialContainer from "./EssentialContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Row, ColCenter, ColLeft, ColRight, Button } from "../MyBootstrap";


const PresetDisplay = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["distro", "desktop", "applications", "essentials", "display"]

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }
    const prevStep = () => {
        setActiveStep(activeStep - 1);
    }
    const goHome = () => {
        
    }
    return (
        <div>
            <Container>
                <Row>
                    <ColLeft>
                        {activeStep === 0 ?
                            <Button onClick={goHome}>
                                <FontAwesomeIcon icon={"home"} size="lg" />
                                {" "}{" "}
                                Home
                            </Button>
                            :
                            <Button onClick={prevStep}>
                                <FontAwesomeIcon icon={"arrow-left"} size="lg" />
                                {" "}{" "}
                                Back
                            </Button>
                        }
                    </ColLeft>
                    <ColCenter><h1>Choose your {steps[activeStep]}</h1></ColCenter>
                    <ColRight>
                        {activeStep !== steps.length &&
                            <Button onClick={nextStep}>
                                Next
                                {" "}{" "}
                                <FontAwesomeIcon icon={"arrow-right"} size="lg" />
                            </Button>}
                    </ColRight>
                </Row>
            </Container>
            <br></br>
            <div style={{ height: "25rem" }}>
                {steps[activeStep] === "desktop" && <DesktopContainer />}
                {steps[activeStep] === "distro" && <DistroContainer />}
                {steps[activeStep] === "applications" && <ApplicationContainer />}
                {steps[activeStep] === "essentials" && <EssentialContainer />}
            </div>
            <br></br>
            <ScriptBar />
        </div>
    )
}

export default PresetDisplay;