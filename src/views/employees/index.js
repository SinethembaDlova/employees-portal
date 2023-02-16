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

      {/* <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input class="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
            </div>

            <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <span>All categorie</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div> */}

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
