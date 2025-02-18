/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element}) => {
  const isAuthenticated = localStorage.getItem('token');
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return element;
};

export default PrivateRoute;