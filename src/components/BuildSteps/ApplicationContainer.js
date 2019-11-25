import React from "react";
import options from "../../data/options";
import { Container, Row, Form, FormGroup } from "reactstrap";
import ApplicationOption from "./ApplicationOption";

const ApplicationContainer2 = () => (
    <div>
        <Container fluid style={{ width: "100%" }}>
            <Row className="justify-content-md-center">
                {options.filter(option => option.type === "application").map(item => {
                    return (
                        <ApplicationOption
                            name={item.name}
                            img={item.icon}
                            desc={item.desc}>
                        </ApplicationOption>
                    )
                })}
            </Row>
        </Container>
    </div>
)

const ApplicationContainer = () => (
    <Form>
        <FormGroup check className="border">
            <Container>
                <Row>
                    {options.filter(option => option.type === "application").map(item => {
                        return (
                            <ApplicationOption
                                name={item.name}
                                img={item.icon}
                                desc={item.desc}>
                            </ApplicationOption>
                        )
                    })}
                </Row>
            </Container>

        </FormGroup>
    </Form>

)

export default ApplicationContainer;