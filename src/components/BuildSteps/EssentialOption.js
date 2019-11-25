import React from 'react';
import { Col, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EssentialOption = ({ name, desc, img }) => {
    return (
        <Col xl="4" className="my-3 text-center">
            <Card style={{borderRadius:"10px", height: "9rem"}} >
                <br></br>
                <span className="inline-block text-center mb-4 p-2">
                    <FontAwesomeIcon icon={img} size="5x"/>
                </span>
            </Card>
            <h6 className="text-center">{name}</h6>
        </Col>
    );
};

export default EssentialOption;