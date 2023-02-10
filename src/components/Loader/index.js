import React from 'react';
import { LoaderContainer, LoaderOverlay } from './index.style';

function Loader() {
  return (
    <LoaderOverlay>
      <LoaderContainer />
    </LoaderOverlay>
  );
}

export default Loader;
