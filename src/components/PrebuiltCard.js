import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, Col
} from 'reactstrap';

const clickableElement = {
  cursor: "pointer"
}

const PrebuiltCard = ({name, desc, img}) => {
  return (
    <Col xl="4" style={clickableElement}>
      <Card>
          <CardTitle className="text-center">{name}</CardTitle>
        <img width="100%" src={img} alt={name} />
        <CardBody>
          <CardText><small>{desc}</small></CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PrebuiltCard;