import React from "react";
import options from "../../data/options";
import DistroOption from "./DistroOption";
import { Container, Row } from "reactstrap";

const DistroContainer = () => (
    <div>
        <Container fluid>
            <Row>
        {options.filter(option => option.type === "distro").map(item => {
            return (
                <DistroOption
                name={item.name}
                img={item.icon}
                desc={item.desc}>
            </DistroOption>
            )
        })}
        </Row>
        </Container>
    </div>
)


export default DistroContainer;