import React, { Fragment } from 'react';
import Container from '../../components/Container';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Employee = () => {

  return (
    <Fragment>
        <Container>
            <h1>Employee</h1>
            <br />
            <Form>
              <Button size='lg' color="primary" className="float-right">
                Update
              </Button> &nbsp;
              <Button size='lg' color="danger" className="float-right">
                Delete
              </Button>
              <h5>Basic Information</h5>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name">
                      First Name
                    </Label>
                    <Input
                      id="first_name"
                      name="first_name"
                    />
                  </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="last_name">
                    Last Name
                  </Label>
                  <Input
                    id="last_name"
                    name="last_name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="contact_number">
                      Contact Number
                    </Label>
                    <Input
                      id="contact_number"
                      name="contact_number"
                    />
                  </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="dob">
                      Date Of Birth
                    </Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                    />
                  </FormGroup>
              </Col>
            </Row>
            <br />
            <h5>Adress Information</h5>
            <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="street_address">
                      Street Adress
                    </Label>
                    <Input
                      id="street_address"
                      name="street_address"
                    />
                  </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="postal_code">
                      Postal Code
                    </Label>
                    <Input
                      id="postal_code"
                      name="postal_code"
                    />
                  </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="country">
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <h5>Skills</h5>
          </Form>
        </Container>
    </Fragment>
  );
};

export default Employee;

