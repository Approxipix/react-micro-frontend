import React from 'react';
import MicroFrontend from '../components/MicroFrontend/MicroFrontend';
import withModuleErrorBoundary from '../hocs/withModuleErrorBoundary';

const BlogsModule = () => {
  return (
    <MicroFrontend
      name="Blogs"
      host={process.env.REACT_APP_MICROFE_BLOGS_HOST}
      style={{ height: '100%' }}
    />
  );
};

export default withModuleErrorBoundary(BlogsModule);
