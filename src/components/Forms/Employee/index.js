import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { convertDateStringToDateObject } from '../../../utils/date';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const EmployeeForm = ({ employee: initialEmployee, isDisabled = false, onSubmit }) => {
  const [employee, setEmployee] = useState({
    first_name: initialEmployee.first_name,
    last_name: initialEmployee.last_name,
    contact_number: initialEmployee.contact_number,
    email: initialEmployee.email,
    dob: initialEmployee.dob,
    address: {
      street_address: initialEmployee.address.street_address,
      city: initialEmployee.address.city,
      postal_code: initialEmployee.address.postal_code,
      country: initialEmployee.address.country,
    },
  });
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    contact_number: false,
    email: false,
    dob: false,
    street_address: false,
    city: false,
    postal_code: false,
    country: false,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddressInputChange = ({ target }) => {
    const { name, value } = target;
    setEmployee({
      ...employee,
      address: {
        ...employee.address,
        [name]: value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({
      first_name: employee.first_name.length === 0,
      last_name: employee.last_name.length === 0,
      contact_number: employee.contact_number.length === 0,
      email: employee.email.length === 0,
      dob: employee.dob.length === 0,
      street_address: employee.address.street_address.length === 0,
      city: employee.address.city.length === 0,
      postal_code: employee.address.postal_code.length === 0,
      country: employee.address.country.length === 0,
    });

    const formIsValid = Object.values(errors).every((error) => error === false);

    if (formIsValid) {
      onSubmit(employee);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
              value={convertDateStringToDateObject(employee?.dob)}
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
              onChange={handleAddressInputChange}
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
              onChange={handleAddressInputChange}
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
              onChange={handleAddressInputChange}
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
              onChange={handleAddressInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <h5>Skills</h5>
      <Button size="lg" color="primary" className="float-right" type="submit">
        Update
      </Button>{' '}
      &nbsp;
    </Form>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EmployeeForm;
