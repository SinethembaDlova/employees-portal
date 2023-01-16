import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import Container from '../../components/Container';
import Table from '../../components/Table';
import { Row, Col, Button } from 'reactstrap';



const Employees = () => {

  const { employees } = useContext(EmployeeContext)

  const tableData = data => {
    return data.map((item, index) => ({
      index: index + 1,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      contact_number: item.contact_number,
      actions: 
        <Link to={`/employees/${item._id}`}>
          View Employee
        </Link>
      
    }));
  };

  return (
    <Fragment>
        <Container>
          <Row>
            <Col md={ 6 }>
              <h1>Employees</h1>
            </Col>
            <Col md={ 6 }>
              <Button size='lg' color="primary" className="float-right">
                Add New Employee
              </Button>
            </Col>
          </Row>
          <Table
            columnNames={[
              '#',
              'First Name',
              'Last Name',
              'Email',
              'Contact Number',
              'Actions'
            ]}
            data={tableData(employees)}
          />
        </Container>
    </Fragment>
  );
};

export default Employees;

