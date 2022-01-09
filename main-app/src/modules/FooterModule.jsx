import React from 'react';
import MicroFrontend from '../components/MicroFrontend/MicroFrontend';
import withModuleErrorBoundary from '../hocs/withModuleErrorBoundary';

const FooterModule = () => {
  return (
    <MicroFrontend
      name="Footer"
      host={process.env.REACT_APP_MICROFE_FOOTER_HOST}
      style={{ height: '100%' }}
    />
  );
};

export default withModuleErrorBoundary(FooterModule);
