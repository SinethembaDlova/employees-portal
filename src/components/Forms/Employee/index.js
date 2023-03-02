import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SkillSet from '../../SkillSet';
import { convertToDbDate, converToInputDate } from '../../../utils/date';
import { Form, Row, Col, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';

const EmployeeForm = ({ employee, setEmployee, isDisabled = false, onSubmit }) => {
  const navigate = useNavigate();
  const paramsId = useParams().id;
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
    if (name === 'dob') {
      setEmployee({ ...employee, [name]: convertToDbDate(value) });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
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

    setImmediate(() => {
      const formIsValid = Object.values(errors).every((error) => error === false);
      if (formIsValid) onSubmit(employee);
    });
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
              invalid={errors?.first_name}
              onChange={handleInputChange}
            />
            <FormFeedback>First Name is a required field.</FormFeedback>
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
              invalid={errors?.last_name}
              onChange={handleInputChange}
            />
            <FormFeedback>Last Name is a required field.</FormFeedback>
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
              invalid={errors?.contact_number}
              onChange={handleInputChange}
            />
            <FormFeedback>Contact Number is a required field.</FormFeedback>
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
              invalid={errors?.email}
              onChange={handleInputChange}
            />
            <FormFeedback>Email is a required field.</FormFeedback>
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
              value={converToInputDate(employee?.dob)}
              disabled={isDisabled}
              invalid={errors?.dob}
              onChange={handleInputChange}
            />
            <FormFeedback>Date Of Birth is a required field.</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <h5>Address Information</h5>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="street_address">Street Adress</Label>
            <Input
              id="street_address"
              name="street_address"
              value={employee?.address?.street_address}
              disabled={isDisabled}
              invalid={errors?.street_address}
              onChange={handleAddressInputChange}
            />
            <FormFeedback>Street Address is a required field.</FormFeedback>
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
              invalid={errors?.city}
              onChange={handleAddressInputChange}
            />
            <FormFeedback>City is a required field.</FormFeedback>
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
              invalid={errors?.postal_code}
              onChange={handleAddressInputChange}
            />
            <FormFeedback>Postal Code is a required field.</FormFeedback>
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
              invalid={errors?.country}
              onChange={handleAddressInputChange}
            />
            <FormFeedback>Country is a required field.</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <h5>Skills</h5>
      <Row>
        <Col>
          <SkillSet skills={employee?.skills} isDisabled={isDisabled} />
        </Col>
      </Row>
      <Button size="lg" color="primary" className="float-right" type="submit">
        {paramsId ? 'Update' : 'Create'}
      </Button>
      <Button size="lg" color="secondary" className="float-right mr-2" onClick={() => navigate(-1)}>
        Cancel
      </Button>
    </Form>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEmployee: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default EmployeeForm;
