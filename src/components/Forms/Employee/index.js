import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const EmployeeForm = ({ employee: initialEmployee, isDisabled, onSubmit }) => {
  const [employee, setEmployee] = useState({ initialEmployee });
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    setEmployee({ ...employee, [target.name]: target.value });
  };

  return (
    <Form onSubmit={onSubmit(employee)}>
      <h5>Basic Information</h5>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              id="first_name"
              name="first_name"
              value={employee?.first_name}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input
              id="last_name"
              name="last_name"
              value={employee?.last_name}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="contact_number">Contact Number</Label>
            <Input
              id="contact_number"
              name="contact_number"
              value={employee?.contact_number}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={employee?.email}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dob">Date Of Birth</Label>
            <Input
              id="dob"
              name="dob"
              type="date"
              value={employee?.email}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <br />

      <h5>Adress Information</h5>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="street_address">Street Adress</Label>
            <Input
              id="street_address"
              name="street_address"
              value={employee?.address?.street_address}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              value={employee?.address?.city}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="postal_code">Postal Code</Label>
            <Input
              id="postal_code"
              name="postal_code"
              value={employee?.address?.postal_code}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={employee?.address?.country}
              disabled={isDisabled}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <h5>Skills</h5>

      <div>
        <Button size="lg" color="primary" className="float-right" type="submit">
          Save
        </Button>
        <Button size="lg" className="float-right mr-2" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EmployeeForm;
