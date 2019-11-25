import React from "react";
import options from "../../data/options";
import DesktopOption from "./DesktopOption";
import { Container, Row } from "reactstrap";

const DesktopContainer = () => (
    <div>
        <Container fluid style={{width: "50%"}}>
            <Row className="justify-content-md-center">
        {options.filter(option => option.type === "desktop").map(item => {
            return (
                <DesktopOption
                name={item.name}
                img={item.icon}
                desc={item.desc}>
            </DesktopOption>
            )
        })}
        </Row>
        </Container>
    </div>
)

export default DesktopContainer;