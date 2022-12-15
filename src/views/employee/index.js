import React, { Fragment } from 'react';
import Container from '../../components/Container';

const Employee = () => {

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
  }
]

  return (
    <Fragment>
        <Container>
            <h1>Employee</h1>
        </Container>
    </Fragment>
  );
};

export default Employee;

