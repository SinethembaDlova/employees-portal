import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../../context/EmployeeContext';
import { Container, Heading, Row } from '../../../globalStyles';
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

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Heading inverse>Create Employee</Heading>
          </Row>
          <EmployeeForm employee={employee} setEmployee={setEmployee} onSubmit={handleAdding} />
        </>
      )}
    </Container>
  );
}

export default CreateEmployee;
