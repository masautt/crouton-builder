import React from 'react';
import { Col, Card, Label, Input, Row } from 'reactstrap';

const ApplicationOption = ({ name, desc, img }) => {
    return (
        <Col xs="6">
            <Label check>
                <Input type="checkbox" />{' '}
            </Label>
            <Card>
                <Row>
                    <Col xs="3">
                        <img src={img} style={{ width: "5rem", marginRight: "4rem" }} alt={name}></img>
                    </Col>
                    <Col xs="9">
                        <div className="m-2">
                            <h4>{name}</h4>
                            <h6>{desc}</h6>    
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default ApplicationOption;