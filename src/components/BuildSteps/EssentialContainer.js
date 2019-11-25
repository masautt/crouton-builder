import React from "react";
import options from "../../data/options";
import EssentialOption from "./EssentialOption";
import { Container, Row } from "reactstrap";

const EssentialContainer = () => (
    <div>
        <Container fluid style={{ width: "50%" }}>
            <Row className="justify-content-md-center">
                {options.filter(option => option.type === "").map(item => {
                    return (
                        <EssentialOption
                            name={item.name}
                            img={item.icon}
                            desc={item.desc}>
                        </EssentialOption>
                    )
                })}
            </Row>
        </Container>
    </div>
)

export default EssentialContainer;