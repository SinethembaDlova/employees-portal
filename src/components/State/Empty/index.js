import React from 'react';
import { Container } from './index.style';
import { ReactComponent as EmptySvg } from '../../../assets/empty.svg';

const EmptyState = () => {
  return (
    <Container>
      <EmptySvg />
      <p>There is currently no employees.</p>
      <p>Click the Add New Employee button to create one.</p>
    </Container>
  );
};

export default EmptyState;
