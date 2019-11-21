import React from 'react';
import { Col, Card } from 'reactstrap';

const DesktopCard = ({ name, desc, img }) => {
    return (
        <Col xl="2">
            <Card style={{borderRadius:"10px"}}>
                <img src={img} alt={name} width="100%" style={{borderRadius:"10px"}}></img>
            </Card>
            <br></br>
            <h6 className="text-center" >{name}</h6>
        </Col>
    );
};

export default DesktopCard;