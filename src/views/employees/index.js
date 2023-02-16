import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { EmployeeContext } from '../../context/EmployeeContext';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import Table from '../../components/Table';

function Employees() {
  const { employees, isLoading } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const tableData = (data) =>
    data.map((item, index) => ({
      index: index + 1,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      contact_number: item.contact_number,
      actions: <Link to={`/employees/${item._id}`}>View Employee</Link>,
    }));

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Employees</h1>
        </Col>
        <Col md={6}>
          <Button
            size="lg"
            color="primary"
            className="float-right"
            onClick={() => navigate('/employees/create')}>
            Add New Employee
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="flex flex-col justify-center items-center mt-4">
          {employees.length > 0 && (
            <Table
              columnNames={['#', 'First Name', 'Last Name', 'Email', 'Contact Number', 'Actions']}
              data={tableData(employees)}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Employees;
