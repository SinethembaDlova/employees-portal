import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from '../../context/EmployeeContext';
import EmployeeForm from '../../components/Forms/Employee/';
import Container from '../../components/Container';
import { Row, Col } from 'reactstrap';

const CreateEmployee = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={ 6 }>
            <h1>Create Employee</h1>
          </Col>
        </Row>

        <br />
        
				<EmployeeForm />

      </Container>
    </Fragment>
  );
};

export default CreateEmployee;

