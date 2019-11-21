import React from 'react';
import { Col, Card } from 'reactstrap';

const DistroCard = ({ name, desc, img }) => {
    return (
        <Col xl="4">
            <Card>
                <img src={img} alt={name} width="100%"></img>
                <h1 className="text-center">{name}</h1>
            </Card>
        </Col>
    );
};

export default DistroCard;