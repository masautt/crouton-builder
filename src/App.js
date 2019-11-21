import React from 'react';
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import PrebuiltDisplay from "./components/PrebuiltDisplay";
import { Container, Row, Col, Jumbotron } from 'reactstrap';

function App() {

    return (
        <div>
            <NavBar />
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <Welcome/>
                            <PrebuiltDisplay/>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
