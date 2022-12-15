import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Table from '../../components/Table';


const Employees = () => {

  const tableData = data => {
    return data.map((item, index) => ({
      index: index + 1,
      first_name: item.first_name,
      last_name: item.last_name,
      contact_number: item.contact_number,
      actions: (
        <Link to={`/employees/${item._id}`}>
          View Employee
        </Link>
      )
    }));
  };

  const data = [
    {
      _id: "DS0111",
      first_name: "Don",
      last_name: "Chad",
      contact_number: "072232432",
      email: "don@gmail.com",
      dob: "21/05/1973",
      address: {
          street_address: "21 Jojo Street",
          city: "Sandton",
          postal_code: "1234",
          country: "South Africa"
      },
      skills: [{
        skill: "React",
        year_of_exp: 2,
        seniority_rating: "Beginner"
      }]
  },
  {
    _id: "DD3423",
    first_name: "Sinethemba",
    last_name: "Dlova",
    contact_number: "0812343322",
    email: "sinethemba@gmail.com",
    dob: "10/06/1993",
    address: {
        street_address: "21 But Street",
        city: "Cape Town",
        postal_code: "3303",
        country: "South Africa"
    },
    skills: [{
      skill: "Node",
      year_of_exp: 10,
      seniority_rating: "Senior"
    }]
} 
]

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
                'Action'
              ]}
              data={tableData(data || [])}
            />
        </Container>
    </Fragment>
  );
};

export default Employees;

