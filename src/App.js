import React from 'react';
import NavBar from "./components/NavBar";
import ScriptBar from './components/ScriptBar';
import Customized from './components/Customized';
import Prebuilt from './components/Prebuilt';
import { Container, Row, Col } from 'reactstrap';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row>
                    <Col sm={{ size: 'auto'}}>
                        <Customized></Customized>
                    </Col>
                </Row>
            </Container>

            <ScriptBar></ScriptBar>
        </>
    );
}

export default App;
