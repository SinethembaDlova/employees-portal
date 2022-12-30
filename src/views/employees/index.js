import React, { Fragment, useContext } from 'react';
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
      contact_number: item.contact_number,
      actions: 
        <>
          <Button size="sm" color="primary" href={`/employees/${item._id}`}>View</Button> &nbsp;
          <Button size="sm" color="danger" >Delete</Button>
        </>      
    }));
  };

  return (
    <Fragment>
        <Container>
            <h1>Employees</h1>
            <Table
              columnNames={[
                '#',
                'First Name',
                'Last Name',
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

