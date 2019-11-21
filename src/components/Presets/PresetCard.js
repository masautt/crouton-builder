import React from 'react';
import { Col, Card } from 'reactstrap';

const PresetCard = ({ name, desc, img }) => {
    return (
        <Col xl="4">
            <Card style={clickableElement}>
                <img src={img} alt={name} style={backgroundImg}></img>
                <div style={titleContainer}>
                    <br></br>
                    <h1 style={titleText}>{name}</h1>
                </div>
            </Card>
        </Col>
    );
};

export default PresetCard;

const clickableElement = {
    cursor: "pointer",
    position: "relative",
    color: "white",
    textAlign: "center",
    borderRadius: "10px"
}

const titleContainer = { 
    position: "absolute", 
    top: "0%", 
    background: "rgba(0, 0, 0, 0.3)", 
    color: "white", width: "100%%", 
    height: "100%", 
    borderRadius: "10px" 
}

const backgroundImg = { 
    filter: "blur(1px)", 
    borderRadius: "10px", 
    height: "100%", 
    width: "100%"
}

const titleText = { 
    background: "rgba(0, 0, 0, 0.4)" 
}

