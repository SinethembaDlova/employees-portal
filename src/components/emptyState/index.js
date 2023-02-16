import React from 'react';
import emptyState from './assets/emptyState.JPG';

const EmptyState = () => {
  return (
    <div>
      <header className="App-header">
        <img src={emptyState} alt="logo" />
        <p>There is nothing here.</p>
        Create a new employee by clicking the New Employee butoon to get started
      </header>
    </div>
  );
};

export default EmptyState;
