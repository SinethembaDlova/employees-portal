import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Button } from 'reactstrap';
import { EmployeeContext } from '../../context/EmployeeContext';
import { Container, Row, Col, Heading, Button } from '../../globalStyles';
import EmptyState from '../../components/State/Empty';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';
import Table from '../../components/Table';

function Employees() {
  const { employees, isLoading, notify } = useContext(EmployeeContext);
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

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row justify="center" mb="20px">
            {notify.variant && notify.message && (
              <Notification variant={notify.variant} message={notify.message} />
            )}
          </Row>
          <Row mb="100px">
            <Heading inverse>Employees</Heading>
            <Button variant="primary" onClick={() => navigate('/employees/create')}>
              Add New Employee
            </Button>
          </Row>
          <Row justify="center">
            <Col>
              {employees.length > 0 ? (
                <Table
                  columnNames={[
                    '#',
                    'First Name',
                    'Last Name',
                    'Email',
                    'Contact Number',
                    'Actions',
                  ]}
                  data={tableData(employees)}
                />
              ) : (
                <EmptyState />
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Employees;
