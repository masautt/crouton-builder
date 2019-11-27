import React from "react";
import options from "../../data/options";
import EssentialOption from "./EssentialOption";
import { Container, Form, FormGroup, Row } from "reactstrap";

const EssentialContainer = () => (
    <Form style={{height: "100%"}}>
        <FormGroup check className="border" style={{height: "100%"}}>
            <Container fluid style={{width: "80%", height: "100%"}}>
                <Row>
                    {options.filter(option => option.type === "essentials").map(item => {
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
        </FormGroup>
    </Form>

)


export default EssentialContainer;