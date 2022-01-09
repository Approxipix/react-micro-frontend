import React from 'react';
import MicroFrontend from '../components/MicroFrontend/MicroFrontend';
import withModuleErrorBoundary from '../hocs/withModuleErrorBoundary';

const AboutModule = () => {
  return (
    <MicroFrontend
      name="About"
      host={process.env.REACT_APP_MICROFE_ABOUT_HOST}
      style={{ height: '100%' }}
    />
  );
};

export default withModuleErrorBoundary(AboutModule);
