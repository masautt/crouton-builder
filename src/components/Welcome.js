import React from 'react';
import { Jumbotron, Button, Col, Row, Container } from 'reactstrap';
import PrebuiltCard from "./PrebuiltCard";
import prebuilts from "../data/prebuilts";

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 text-center">Welcome to Crouton-Builder!</h1>
        <p className="lead text-center">A UI for building your chroots</p>
        <hr className="my-2" />
        <p className="lead">
          <br></br>
          <p className="lead">Choose from a preset...</p>
          <Container fluid>
          <Row>
              {prebuilts.map(item => <PrebuiltCard
                name={item.name}
                img={item.img}
                desc={item.desc}></PrebuiltCard>)}
          </Row>
          </Container>
          

          <p className="lead">...or create your own!</p>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;