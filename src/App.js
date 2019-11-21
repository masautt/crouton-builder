import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import WelcomeBanner from "./components/WelcomeBanner";
import PresetDisplay from "./components/Presets/PresetDisplay";
import StartButton from "./components/StartButton";
import BuildDisplay from "./components/BuildDisplay";

import { Container, Row, Col, Jumbotron } from 'reactstrap';

function App() {
    const [activeMenu, setActiveMenu] = useState("build")
    return (
        <div>
            <NavBar />
            <br></br>
            <Container>
                <Row>
                    <Col>
                        {activeMenu === "main" && <MainMenu/>}
                        {activeMenu === "presets" && <PresetsMenu/>}
                        {activeMenu === "build" && <BuildMenu/>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const MainMenu = () => (
    <Jumbotron>
        <WelcomeBanner />
        <br></br>
        <StartButton />
        <br></br>
        <PresetDisplay />
    </Jumbotron>
)

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
