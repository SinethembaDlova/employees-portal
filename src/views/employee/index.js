import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormGroup, Label, Input } from 'reactstrap';
import { EmployeeContext } from '../../context/EmployeeContext';
import { Container, Row, Col, Heading, Button } from '../../globalStyles';
import EmployeeForm from '../../components/Forms/Employee';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';

function Employee() {
  const { getEmployee, updateEmployee, removeEmployee, isLoading, notify } =
    useContext(EmployeeContext);
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
          <Row>
            <Heading inverse>Employee</Heading>
            <Col>
              <Button variant="danger" mb="20px" onClick={handleDeleting}>
                Delete Employee
              </Button>
              <FormGroup switch disabled={isDisabled}>
                <Input
                  type="switch"
                  bssize="md"
                  checked={isDisabled}
                  onChange={() => {
                    setIsDisabled(!isDisabled);
                  }}
                />
                <Label check>{isDisabled ? 'Unlock form' : 'Lock form'}</Label>
              </FormGroup>
            </Col>
          </Row>
          <EmployeeForm
            employee={employee}
            setEmployee={setEmployee}
            onSubmit={handleUpdating}
            isDisabled={isDisabled}
          />
        </>
      )}
    </Container>
  );
}

export default Employee;
