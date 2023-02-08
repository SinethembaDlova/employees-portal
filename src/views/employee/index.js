import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from '../../context/EmployeeContext';
import { convertDateStringToDateObject } from '../../utils/date'
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Employee = () => {

  const { getEmployee, updateEmployee, removeEmployee, isLoading } = useContext(EmployeeContext);
  const params = useParams();
  const navigate = useNavigate()
  const [employee, setEmployee] = useState({
      first_name: '',
      last_name: '',
      contact_number: '',
      email: '',
      dob: '',
      address: {
        street_address: '',
        city: '',
        postal_code: '',
        country: ''
      },
      skills: []
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
    country: false
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = ({ target }) => {
    const {name, value} = target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddressInputChange = ({ target }) => {
    const {name, value} = target;
    setEmployee({
      ...employee,
      address: {
        ...employee.address,
        [name]: value
      }
    });
  };

  const handleUpdating = async () => {
    if (params.id) {
      setErrors({
        first_name: employee.first_name.length === 0,
        last_name: employee.last_name.length === 0,
        contact_number: employee.contact_number.length === 0,
        email: employee.email.length === 0,
        dob: employee.dob.length === 0,
        street_address: employee.address.street_address.length === 0,
        city: employee.address.city.length === 0,
        postal_code: employee.address.postal_code.length === 0,
        country: employee.address.country.length === 0
      });
      
      const isFormValid = Object.values(errors).every(error => error === false);

      if (isFormValid) {
          await updateEmployee(params.id, employee);
          setIsDisabled(true);
      }
    }
  }

  const handleDeleting = async () => {
    if (params.id) {
      await removeEmployee(params.id);
      navigate('/employees');
    }
  }
  
  useEffect(() => {
    (async () => {
      if (params.id) {
        const employee = await getEmployee(params.id);
        setEmployee({
          first_name: employee.first_name,
          last_name: employee.last_name,
          contact_number: employee.contact_number,
          email: employee.email,
          dob: employee.dob,
          address: employee.address,
          skills: employee.skills
        });
      }
    })();
  }, [params.id, getEmployee]);
  
  if (isLoading) return <Loader /> 

  return (
    <Fragment>
        <Container>
            <Form>
              <Row>
                <Col md={ 6 }>
                  <h1>Employee</h1>
                </Col>
                <Col md={ 6 }>
                  <Button size='lg' color="danger" outline className="float-right" onClick={ handleDeleting }>
                    Delete Employee
                  </Button>
                </Col>
              </Row>

              <br />
              <Row>
                <Col md={12}>
                  <FormGroup className="float-right" switch disabled={ isDisabled } >
                    <Input 
                      type="switch" 
                      size="md"
                      checked={ isDisabled }
                      onClick={() => {
                      setIsDisabled(!isDisabled);
                      }} 
                    />
                    <Label check>{ isDisabled ? 'Unlock form' : 'Lock form' }</Label>
                  </FormGroup> 
                </Col>

              </Row>
              <br />
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
                      value={ employee?.first_name }
                      disabled={ isDisabled }
                      onChange={ handleInputChange }
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
                    value={ employee?.last_name }
                    disabled={ isDisabled }
                    onChange={ handleInputChange }
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
                      value={ employee?.contact_number }
                      disabled={ isDisabled }
                      onChange={ handleInputChange }
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
                    value={ employee?.email }
                    disabled={ isDisabled }
                    onChange={ handleInputChange }
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
                      value={ convertDateStringToDateObject(employee?.dob) }
                      disabled={ isDisabled }
                      onChange={ handleInputChange }
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
                      value={ employee?.address?.street_address }
                      disabled={ isDisabled }
                      onChange={ handleAddressInputChange }
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
                    value={ employee?.address?.city }
                    disabled={ isDisabled }
                    onChange={ handleAddressInputChange }
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
                      value={ employee?.address?.postal_code }
                      disabled={ isDisabled }
                      onChange={ handleAddressInputChange }
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
                    value={ employee?.address?.country }
                    disabled={ isDisabled }
                    onChange={ handleAddressInputChange }
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <h5>Skills</h5>
            <Button size='lg' color="primary" className="float-right" onClick={ handleUpdating }>
                Update
            </Button> &nbsp;
          </Form>
        </Container>
    </Fragment>
  );
};

export default Employee;

