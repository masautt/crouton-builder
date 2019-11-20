import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, Col
} from 'reactstrap';

const PrebuiltCard = ({name, desc, img}) => {
  return (
    <Col xl="3">
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
        <img width="100%" src={img} alt={name} />
        <CardBody>
          <CardText>{desc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PrebuiltCard;