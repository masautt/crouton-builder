import React from "react";
import options from "../../data/options";
import DistroCard from "./DistroCard";
import { Container, Row } from "reactstrap";

const ChooseDistro = () => (
    <div>
        <h1 className="text-center">Choose your distro</h1>
        <br></br>
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

export default ChooseDistro;