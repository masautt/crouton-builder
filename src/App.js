import React from 'react';
import NavBar from "./components/NavBar";
import ScriptBar from './components/ScriptBar';
import Customized from './components/Customized';
import Welcome from "./components/Welcome";
import { Container, Row, Col } from 'reactstrap';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Welcome></Welcome>
                    </Col>
                </Row>
            </Container>

            <ScriptBar></ScriptBar>
        </>
    );
}

export default App;
