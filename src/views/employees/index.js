import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import Container from '../../components/Container';
import Table from '../../components/Table';


const Employees = () => {

  const { employees } = useContext(GlobalContext)

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
            <h1>Employees</h1>
            <Button>Add New Employee</Button>
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

