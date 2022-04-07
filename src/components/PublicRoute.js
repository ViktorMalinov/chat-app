import React from 'react';
import { Navigate } from 'react-router';

// { children, ...routeProps }
const PublicRoute = ({ children }) => {
  const profile = false;

  if (profile) {
    return <Navigate to="/" />;
  }

  return children;
  // return (
  //   <Routes>
  //     <Route {...routeProps}>{children}</Route>;
  //   </Routes>
  // );
};

export default PublicRoute;
