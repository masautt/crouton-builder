import React from 'react';
import { Col, Card } from 'reactstrap';

const ApplicationsCard = ({ name, desc, img }) => {
    return (
        <Col xl="4" className="my-3">
            <Card style={{borderRadius:"10px"}}>
                <img src={img} alt={name} width="100%" style={{borderRadius:"10px"}}></img>
            </Card>
            <h6 className="text-center mt-2" >{name}</h6>
        </Col>
    );
};

export default ApplicationsCard;