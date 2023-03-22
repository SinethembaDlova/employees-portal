import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { EmployeeContext } from '../../context/EmployeeContext';
import { Container } from '../../globalStyles';
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
      <Row className="mt-4">
        {notify.variant && notify.message && (
          <Notification variant={notify.variant} message={notify.message} />
        )}
      </Row>
      <Row>
        {employees.length > 0 ? (
          <Col md={12} className="flex flex-col justify-center items-center mt-5">
            <Table
              columnNames={['#', 'First Name', 'Last Name', 'Email', 'Contact Number', 'Actions']}
              data={tableData(employees)}
            />
          </Col>
        ) : (
          <Col>
            <EmptyState />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Employees;
