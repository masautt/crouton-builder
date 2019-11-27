import React from 'react';
import styled from 'styled-components';
import { Col, Card } from 'reactstrap';

const DistroOption = ({ name, desc, img }) => {
    return (
        <Col xl="4">
            <Card style={{ borderRadius: "10px" }} className="distro-option-container">
                <img src={img} alt={name} width="100%"></img>
            </Card>
            <br></br>
            <h2 className="text-center" >{name}</h2>
        </Col>
    );
};

export default DistroOption;