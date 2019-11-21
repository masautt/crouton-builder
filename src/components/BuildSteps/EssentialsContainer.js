import React from "react";
import options from "../../data/options";
import DesktopCard from "./DesktopCard";
import { Container, Row } from "reactstrap";

const EssentialsContainer = () => (
    <div>
        <Container fluid style={{width: "50%"}}>
            <Row className="justify-content-md-center">
        {options.filter(option => option.type === "desktop").map(item => {
            return (
                <DesktopCard
                name={item.name}
                img={item.icon}
                desc={item.desc}>
            </DesktopCard>
            )
        })}
        </Row>
        </Container>
    </div>
)

export default EssentialsContainer;