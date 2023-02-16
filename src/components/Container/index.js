import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from './index.style';

const Container = ({ children }) => {
  return <PageContainer> {children}</PageContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
