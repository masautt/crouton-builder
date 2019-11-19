import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Distro = (props) => {
    return (
        <Form>
            <FormGroup tag="distro">
                <legend>Distro</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Ubuntu
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Debian
                    </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Kali
                    </Label>
                </FormGroup>
            </FormGroup>
        </Form>
    );
}

export default Distro;