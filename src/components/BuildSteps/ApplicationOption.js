import React from 'react';
import { Col, Card, Label, Input } from 'reactstrap';

const ApplicationOption2 = ({ name, desc, img }) => {
    return (
        <Col xs="2" className="my-3">
            <Card style={{ borderRadius: "10px" }}>
                <img src={img} alt={name} width="100%" style={{ borderRadius: "10px" }}></img>
            </Card>
            <h6 className="text-center mt-2" >{name}</h6>
        </Col>
    );
};

const ApplicationOption = ({ name, desc, img }) => {
    return (
        <Col xs="6">
        <Label check>
            <img src={img} style={{width: "5rem"}} alt={name}></img>
            <Input type="checkbox" />{' '}
            <h4>{name}</h4>
        </Label>
        <br></br>
        </Col>

    )
}

export default ApplicationOption;