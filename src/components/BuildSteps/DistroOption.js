import React from 'react';
import { Col, Card } from 'reactstrap';

const DistroOption = ({ name, desc, img }) => {
    return (
        <Col xl="4">
            <Card style={{borderRadius:"10px"}}>
                <img src={img} alt={name} width="100%" style={{borderRadius:"10px"}}></img>
            </Card>
            <br></br>
            <h2 className="text-center" >{name}</h2>
        </Col>
    );
};

export default DistroOption;