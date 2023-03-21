import React from 'react';
import { Container } from './index.style';
import { ReactComponent as EmptySvg } from '../../../assets/empty.svg';

const EmptyState = () => {
  return (
    <Container>
      <EmptySvg />
      <p>There is nothing here.</p>
      <p>Create a new employee by clicking the New Employee button.</p>
    </Container>
  );
};

export default EmptyState;
