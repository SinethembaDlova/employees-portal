import React, { Fragment, useContext, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from '../../context/EmployeeContext';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateEmployee = () => {

  const { addEmployee, isLoading } = useContext(EmployeeContext);
  const params = useParams();
  const navigate = useNavigate()
  const [employee, setEmployee] = useState({
      first_name: '',
      last_name: '',
      contact_number: '',
      email: '',
      dob: '11/12/1990',
      address: {
        street_address: '',
        city: '',
        postal_code: '',
        country: ''
      },
      skills: [{
        skill: "React",
        year_of_exp: 2,
        seniority_rating: "Beginner"
    }]
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleInputChange = ({ target }) => {
    console.log('name: ');
    setEmployee({ ...employee, [target.name]: target.value });
  };

  const handleAdding = async () => {
    if (params.id) {
      const createdEmployee = await addEmployee(employee);
      setIsDisabled(true);
      navigate(`/employees/${ createdEmployee._id}`);
    }
  }

  if (isLoading) <Loader /> 

  return (
    <Fragment>
        <Container>
            <Form on onSubmit={ handleAdding }>
              <Row>
                <Col md={ 6 }>
                  <h1>Create Employee</h1>
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
                      value={ employee?.email }
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
                      onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
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
                      onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
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
          	  <Button size="lg" className="float-right mr-2" onClick={ () => navigate(-1) }>
            	  Cancel
          	  </Button>
					  </div>
          </Form>
        </Container>
    </Fragment>
  );
};

export default CreateEmployee;

