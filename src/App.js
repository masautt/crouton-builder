import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import WelcomeBanner from "./components/WelcomeBanner";
import PresetDisplay from "./components/Presets/PresetDisplay";
import BuildDisplay from "./components/BuildDisplay";

import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';



function App() {
    const [activeMenu, setActiveMenu] = useState("main")

    return (
        <div>
            <NavBar />
            <br></br>
            <Container>
                <Row>
                    <Col>
                        {activeMenu === "main" && <Jumbotron>
                            <WelcomeBanner />
                            <br></br>
                            <div className="d-flex align-items-center justify-content-center">
                                <Button color="dark" onClick={() => setActiveMenu("build")}><h2>Start</h2></Button>
                            </div>
                            <br></br>
                            <PresetDisplay/>
                        </Jumbotron>}
                        {activeMenu === "presets" && <PresetsMenu />}
                        {activeMenu === "build" && <BuildMenu />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const PresetsMenu = () => (
    <Jumbotron>
        <PresetDisplay />
    </Jumbotron>
)

const BuildMenu = () => (
    <Jumbotron>
        <BuildDisplay />
    </Jumbotron>
)

export default App;
