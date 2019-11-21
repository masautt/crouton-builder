import React from "react";
import options from "../../data/options";
import DistroCard from "./DistroCard";
import { Container, Row } from "reactstrap";

const DistroContainer = () => (
    <div>
        <Container fluid>
            <Row>
        {options.filter(option => option.type === "distro").map(item => {
            return (
                <DistroCard
                name={item.name}
                img={item.icon}
                desc={item.desc}>
            </DistroCard>
            )
        })}
        </Row>
        </Container>
    </div>
)


export default DistroContainer;