import React, { useState } from 'react';
import { Row, Container } from 'reactstrap';
import PresetCard from "./PresetCard";
import presets from "../../data/presets";


const PresetDisplay = () => {
    const [limit, setLimit] = useState(4);
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
                            title={item.title}
                            subtitle={item.subtitle}
                            imgs={item.imgs}>
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