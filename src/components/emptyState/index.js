import React from 'react';
import { Container, Image } from './index.style';
import emptyState from '../../assets/emptyState.JPG';

const EmptyState = () => {
  return (
    <Container>
      <Image src={emptyState} alt="empty" />
      <p>There is nothing here.</p>
      <p>Create a new employee by clicking the New Employee butoon to get started.</p>
    </Container>
  );
};

export default EmptyState;
