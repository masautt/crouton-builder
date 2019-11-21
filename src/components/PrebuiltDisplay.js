import React from 'react';
import { Row, Container } from 'reactstrap';
import PrebuiltCard from "./PrebuiltCard";
import prebuilts from "../data/prebuilts";


const PrebuiltDisplay = () => (
    <p className="lead">
        <p className="lead">Choose a preset...</p>
        <Container fluid>
            <Row>
                {prebuilts.slice(0, 3).map(item =>
                    <PrebuiltCard
                        name={item.name}
                        img={item.img}
                        desc={item.desc}>
                    </PrebuiltCard>
                )}
            </Row>
        </Container>
        <a className="text-right">See more</a>
    </p>
)

export default PrebuiltDisplay;