import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { EmployeeContext } from '../../context/EmployeeContext';
import Container from '../../components/Container';
import EmployeeForm from '../../components/Forms/Employee';
import Loader from '../../components/Loader';

function Employee() {
  const { getEmployee, updateEmployee, removeEmployee, isLoading } = useContext(EmployeeContext);
  const params = useParams();
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
  const [isDisabled, setIsDisabled] = useState(true);

  const handleUpdating = async () => {
    await updateEmployee(params.id, employee);
    setIsDisabled(true);
  };

  const handleDeleting = async () => {
    if (params.id) {
      await removeEmployee(params.id);
      navigate('/employees');
    }
  };

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
          skills: employee.skills,
        });
      }
    })();
  }, [params.id]);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Employee</h1>
        </Col>
        <Col md={6}>
          <Button size="lg" color="danger" outline className="float-right" onClick={handleDeleting}>
            Delete Employee
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <FormGroup className="float-right" switch disabled={isDisabled}>
            <Input
              type="switch"
              size="md"
              checked={isDisabled}
              onClick={() => {
                setIsDisabled(!isDisabled);
              }}
            />
            <Label check>{isDisabled ? 'Unlock form' : 'Lock form'}</Label>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Row>
        <EmployeeForm employee={employee} setEmployee={setEmployee} onSubmit={handleUpdating} />
      </Row>
    </Container>
  );
}

export default Employee;
