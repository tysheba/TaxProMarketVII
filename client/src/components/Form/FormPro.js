import React from 'react';
import "./Form.css";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormPro extends React.Component {
    render() {
        return (
            <Form>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="proEmail">Email</Label>
                            <Input type="email" name="email" id="proEmail" placeholder="Email" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="fullName">Name</Label>
                            <Input type="text" name="fName" id="fullName" placeholder="Enter Full Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">Office Address</Label>
                    <Input type="text" name="address" id="address" placeholder="1234 Main St" />
                </FormGroup>
                <FormGroup>
                    <Label for="address2">Address 2</Label>
                    <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
                </FormGroup>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" id="state" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="zipcode">Zip</Label>
                            <Input type="text" name="zip" id="zipcode" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Label for="textarea">Summary of Qualifications</Label>
                    <Input type="textarea" name="text" id="textarea" />
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Provide a description of your Qualifications
            </FormText>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}