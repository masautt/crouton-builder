import React, { useState } from 'react';
import NavBar from "./components/Home/NavBar";
import PresetDisplay from "./components/Preset/PresetDisplay";
import BuildDisplay from "./components/Make/MakeDisplay";

import { Row, Col, Container, Jumbotron, Button, Centered } from "./components/MyBootstrap";

const App = () => {
    const [activeMenu, setActiveMenu] = useState("home")

    return (
        <div>
            <NavBar />
            <br></br>
            <Container>
                <Row>
                    <Col>
                        {activeMenu === "home" && <Jumbotron>
                            <WelcomeBanner />
                            <br />
                            <Centered>
                                <Button onClick={() => setActiveMenu("build")}><h2>Start</h2></Button>
                            </Centered>
                            <br></br>
                            <PresetDisplay />
                        </Jumbotron>}
                        {activeMenu === "presets" && <Jumbotron><PresetDisplay /></Jumbotron>}
                        {activeMenu === "build" && <Jumbotron><BuildDisplay /></Jumbotron>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const WelcomeBanner = () => (
    <div>
        <h1 className="display-3 text-center">Crouton-Builder <small>v1.2</small></h1>
        <p className="lead text-center">A UI for building chroots</p>
        <hr className="my-2" />
        <p className="lead"></p>
    </div>
)

export default App;
