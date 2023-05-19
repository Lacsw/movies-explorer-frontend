import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { children, isLoggedIn } = props;

  if (isLoggedIn) {
    return children ? children : <Outlet />;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
