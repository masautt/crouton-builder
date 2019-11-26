import React from 'react';
import { Col, Card, Label, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EssentialOption = ({ name, desc, img }) => {
    return (
        <Col xs="6">
            <Label check>
                <Input type="checkbox" />{' '}
            </Label>
            <Card>
                <Row>
                    <Col xs="3">
                        <FontAwesomeIcon icon={img} size="4x" className="m-3"/>
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


export default EssentialOption;