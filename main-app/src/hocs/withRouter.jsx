import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const history = useNavigate();
  const location = useLocation();

  return (
    <WrappedComponent
      {...props}
      params={params}
      history={history}
      location={location}
    />
  );
};

export default withRouter;