/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return element; 
};

export default PublicRoute;