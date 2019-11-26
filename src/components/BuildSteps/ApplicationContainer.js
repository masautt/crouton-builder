import React from "react";
import options from "../../data/options";
import { Container, Row, Form, FormGroup } from "reactstrap";
import ApplicationOption from "./ApplicationOption";

const ApplicationContainer = () => (
    <Form style={{height: "100%"}}>
        <FormGroup check className="border" style={{height: "100%"}}>
            <Container fluid style={{width: "80%", height: "100%"}}>
                <Row>
                    {options.filter(option => option.type === "applications").map(item => {
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