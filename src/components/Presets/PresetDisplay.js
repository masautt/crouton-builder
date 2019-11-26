import React, { useState } from 'react';
import { Row, Container } from 'reactstrap';
import PresetCard from "./PresetCard";
import presets from "../../data/presets";


const PresetDisplay = () => {
    const [limit, setLimit] = useState(3);
    return (
        <p className="lead">
            <br></br>
            <div className="d-flex align-items-center justify-content-center">
                <p>Or choose a preset</p>
            </div>
            <Container fluid>
                <Row>
                    {presets.slice(0, limit).map(item =>
                        <PresetCard
                            name={item.name}
                            img={item.img}
                            desc={item.desc}>
                        </PresetCard>
                    )}
                </Row>
            </Container>
            <div className="d-flex align-items-center justify-content-center">
                <p onClick={() => setLimit(presets.length)}>See All</p>
            </div>
        </p>
    )
}

export default PresetDisplay;