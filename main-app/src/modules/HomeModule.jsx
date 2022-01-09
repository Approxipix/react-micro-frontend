import React from 'react';
import MicroFrontend from '../components/MicroFrontend/MicroFrontend';
import withModuleErrorBoundary from '../hocs/withModuleErrorBoundary';

const HomeModule = () => {
  return (
    <MicroFrontend
      name="Home"
      host={process.env.REACT_APP_MICROFE_HOME_HOST}
      style={{ height: '100%' }}
    />
  );
};

export default withModuleErrorBoundary(HomeModule);
