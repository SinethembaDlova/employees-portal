import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'reactstrap';
import { EmployeeContext } from '../../../context/EmployeeContext';
import { Container } from '../../../globalStyles';
import EmployeeForm from '../../../components/Forms/Employee';
import Loader from '../../../components/Loader';

function CreateEmployee() {
  const { addEmployee, isLoading } = useContext(EmployeeContext);
  const navigate = useNavigate();
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
      country: '',
    },
    skills: [],
  });

  const handleAdding = async () => {
    const createdEmployee = await addEmployee(employee);
    navigate(`/employees/${createdEmployee._id}`);
  };

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Row className="mb-4">
        <h1>Create Employee</h1>
      </Row>
      <Row>
        <EmployeeForm employee={employee} setEmployee={setEmployee} onSubmit={handleAdding} />
      </Row>
    </Container>
  );
}

export default CreateEmployee;
