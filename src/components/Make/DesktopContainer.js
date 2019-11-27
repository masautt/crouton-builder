import React from "react";
import options from "../../data/options";
import DesktopOption from "./DesktopOption";
import { Container, Row, Form, FormGroup } from "reactstrap";

const DesktopContainer = () => (
    <Form>
        <FormGroup check className="border">
            <Container fluid style={{ width: "50%" }}>
                <Row className="justify-content-md-center">
                    {options.filter(option => option.type === "desktop").map(item => (
                        <DesktopOption
                            name={item.name}
                            img={item.icon}
                            desc={item.desc}>
                        </DesktopOption>
                    ))}
                </Row>
            </Container>
        </FormGroup>
    </Form>
)

export default DesktopContainer;