import React from 'react';
import { Navigate } from 'react-router';

// { children, ...routeProps }
const PrivateRoute = ({ children }) => {
  const profile = false;

  if (!profile) {
    return <Navigate to="/signin" />;
  }

  return children;

  // return (
  //   <Routes>
  //     <Route {...routeProps}>{children}</Route>;
  //   </Routes>
  // );
};

export default PrivateRoute;
