import React from 'react';
import { Container, Image } from './index.style';
import empty from '../../../assets/images/state/empty.jpg';

const EmptyState = () => {
  return (
    <Container>
      <Image src={require(empty)} alt="empty" />
      <p>There is nothing here.</p>
      <p>Create a new employee by clicking the New Employee button.</p>
    </Container>
  );
};

export default EmptyState;
